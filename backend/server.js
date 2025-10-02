// 1. Import dependencies
import 'dotenv/config'; // Loads .env file variables
import express from 'express';
import cors from 'cors';

// --- Helper function to fetch an image and convert it to Base64 ---
// This avoids repeating the same logic for each service.
async function fetchImageAsBase64(url) {
  // Use the built-in fetch for modern Node.js
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }
  // Convert the image data into a buffer, then to a base64 string
  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer).toString('base64');
}

// --- Define Image Generation Services ---

// Primary Service: Pollinations.ai (AI-generated images)
const generateWithPollinations = (prompt) => {
  console.log('Trying Pollinations...');
  const encodedPrompt = encodeURIComponent(prompt);
  const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}`;
  return fetchImageAsBase64(imageUrl);
};

// Fallback Service: Unsplash (high-quality stock photos)
const generateWithUnsplash = (prompt) => {
  console.log('Trying Unsplash fallback...');
  const encodedPrompt = encodeURIComponent(prompt);
  const imageUrl = `https://source.unsplash.com/1024x1024/?${encodedPrompt}`;
  return fetchImageAsBase64(imageUrl);
};


// --- Set up the Express Server ---
const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares to enable CORS and parse JSON bodies
app.use(cors());
app.use(express.json());

// The main endpoint to generate an image
app.post('/generate-image', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: 'A prompt is required.' });
  }

  console.log(`Generating image for: "${prompt}"`);

  // An array of services to try in order.
  const services = [
    { name: 'Pollinations', generator: generateWithPollinations },
    { name: 'Unsplash', generator: generateWithUnsplash },
  ];

  // Loop through the services until one succeeds
  for (const service of services) {
    try {
      console.log(`Attempting to use ${service.name}...`);
      const b64Json = await service.generator(prompt);
      
      console.log(`Success with ${service.name}!`);
      // Send the successful response back to the client
      return res.json({ 
        images: [{ b64Json }], 
        success: true, 
        service: service.name 
      });

    } catch (error) {
      console.log(`${service.name} failed:`, error.message);
      // If a service fails, the loop will just continue to the next one.
    }
  }
  
  // This code runs only if all services in the loop have failed.
  console.error('All image generation services failed.');
  res.status(500).json({ 
    error: 'All services failed. The servers may be busy. Please try again later.' 
  });
});

app.listen(PORT, () => {
  console.log(`Server is live and running on http://localhost:${PORT}`);
});

