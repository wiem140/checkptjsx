import React from 'react';
import './App.css';
import  imgSrc from './img1.png';
function App() {
  return (
    <div>
    <div style={{border:"1px solid black", maxWidth:"100vw"}}>
      <h1 className="title red"> Wiem </h1>
        <br></br>
      <img src={imgSrc} width={400} height={400} alt="img1" />
      <br></br>
        <img src="/img2.jpg" width={400} height={400} alt="image2" />
        <br></br>
        </div>
        <video className="vid" width={500} height={500} controls>
          <source src="myVideo.mp4" type="video/mp4" />
      </video>
  </div>
    
  );
}

export default App;
