import React from 'react'
import{useRef, useState} from 'react'
import './ImageGenerator.css'
import default_pic from '../../assets/default.jpg'

function ImageGenerator() {
    const [image_url, setInage_url] = useState("/");
    let inputRef = useRef(null);
    const[loading, setLoading] = useState(false);

    const imageGenerator = async ()=>{
        if(inputRef.current.value===""){
            return 0;
        }
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:3001/generate-image`,
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    prompt: inputRef.current.value,
                }),
            }
        );
        if (!response.ok) {
            const errorData = await response.json();
            console.error("Backend Error:", errorData);
            return;
        }
        const data = await response.json();

        if (data.images && data.images.length > 0) {
            const base64Image = data.images[0].b64Json;
            setInage_url(`data:image/png;base64,${base64Image}`);
        }
        }catch(error){
            console.error("Fetch Error:", error);
        }
        setLoading(false);
    };
    return (
    <div className='ai-image-generator'>
        <div className='header'>Ai Image <span>generator</span></div>
        <div className='img-loading'>
            <div className="image"><img src={image_url==="/"?default_pic:image_url} alt=""/></div>
            <div className="loading">
                <div className={loading?"loading-bar-full":"loading-bar"}></div>
                <div className={loading?"loading-text":"display-none"}>Loading...</div>
            </div>
        </div>
        <div className="search-box">
            <input type="text" ref={inputRef} className='search-input' placeholder='Search your image...'/>
            <div className="generate-btn" onClick={()=>{imageGenerator()}}>Generate</div>
        </div>
    </div>
  )
}

export default ImageGenerator