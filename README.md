# AI Image Generator - Imaginator

An AI-powered application that brings your text prompts to life by generating unique and stunning images. This project is built with the MERN stack (MongoDB, Express.js, React, Node.js) and utilizes an AI image generation API to create visuals from textual descriptions.

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Badge"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite Badge"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js Badge"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js Badge"/>
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB Badge"/>
</div>

<img width="1919" height="908" alt="Screenshot 2025-09-06 154331" src="https://github.com/user-attachments/assets/5fdf7947-4fc7-40f8-84ce-3b8e69e34b8b" />

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Acknowledgements](#acknowledgements)

## Features

-   **Text-to-Image Generation:** Simply type a descriptive prompt and generate a corresponding image.
-   **Simple & Clean UI:** An intuitive and easy-to-navigate user interface built with React.
-   **Full-Stack Architecture:** Robust backend to handle API requests and a dynamic frontend to display results.
-   **Responsive Design:** Accessible and usable on various screen sizes.

## Technologies Used

This project is built using the MERN stack and other modern technologies:

-   **Frontend:**
    -   [React.js](https://reactjs.org/)
    -   [Vite](https://vitejs.dev/)
    -   [Tailwind CSS](https://tailwindcss.com/) (or a similar CSS framework)
-   **Backend:**
    -   [Node.js](https://nodejs.org/)
    -   [Express.js](https://expressjs.com/)
-   **Database:**
    -   [MongoDB](https://www.mongodb.com/)
-   **AI Image Generation:**
    -   [Pollinations.ai](https://pollinations.ai/) or a similar AI Image Generation API.
/
├── backend/      # Contains the Node.js & Express.js server-side code
└── frontend/      # Contains the React.js client-side code
## Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

Make sure you have the following installed on your machine:

-   [Node.js](https://nodejs.org/en/download/) (which includes npm)
-   [MongoDB](https://www.mongodb.com/try/download/community) (or a MongoDB Atlas account)
-   A code editor like [Visual Studio Code](https://code.visualstudio.com/)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/PrateekNarain/Imaginator.git](https://github.com/PrateekNarain/Imaginator.git)
    cd Imaginator
    ```

2.  **Install backend dependencies:**
    Navigate to the `backend` folder and install the required npm packages.
    ```sh
    cd backend
    npm install
    ```

3.  **Install frontend dependencies:**
    Navigate to the `frontend` folder and install its packages.
    ```sh
    cd ../frontend
    npm install
    ```

### Environment Variables

Both the frontend and backend require environment variables to connect to services like MongoDB and the AI API.

1.  **Backend `.env` file:**
    In the `backend` folder, create a new file named `.env` and add the following variables.
    ```
    MONGODB_URI=your_mongodb_connection_string
    PORT=8080
    AI_API_KEY=your_ai_image_api_key
    ```

2.  **Frontend `.env` file:**
    In the `frontend` folder, create a new file named `.env` and add the URL for your backend server.
    ```
    VITE_API_URL=http://localhost:8080
    ```
    *(Note: If you are using Create React App, the variable should be named `REACT_APP_API_URL`)*

## Usage

1.  **Start the backend server:**
    From the `backend` directory, run:
    ```sh
    npm start
    ```
    The server should now be running on `http://localhost:8080`.

2.  **Start the frontend application:**
    In a separate terminal, from the `frontend` directory, run:
    ```sh
    npm run dev
    ```
    *(Use `npm start` if you are using Create React App)*

3.  **Open the application:**
    Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal). You can now enter a prompt and generate an image.

## Acknowledgements

-   A big thank you to the creators of the AI models that make this technology possible.
-   Project inspired by the advancements in generative AI.
## Project Structure

The repository is organized into two main folders:
