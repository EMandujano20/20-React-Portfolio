import React from 'react';

import './App.css'; 



function App() {
  return (
    <>
      <header>Eduardo Mandujano <br/>Software Engineer</header>
      <div>
        <button id="button1"><a href="https://github.com/EMandujano20">Github</a></button>
        <button id="button2"><a href="mailto:mandujanolalo@gmail.com">Gmail</a></button>
      </div>
      <section id="About Me">
        <div>
          <h2 className="title">About Me</h2>       
          <img className="image1" id="object-position" src='./assets/images/IMG_0738.jpeg' alt="Most Recenct Pic with my Sisters"/>
          <p className="text">Hello welcome to my Portfolio. My name is Eduardo Mandujano. I am 23 years old, I am the youngest of three. I have been working in contruction for the past 5 years and have been studying to work in emergency services for the past 2 years. But I have always wanted to break into the tech field I'm hoping this course will take me where I want to go. I am originally from the Los Angeles area but a few months ago, I moved up to Yolo county, near Sacramento, to be closer to my girlfriend. Some of my hobbies include photography, playing video games, playing sports and working on my 1965 Mustang that me and my father are rebuilding together. </p>
        </div>
      </section>
      <section id="Work">
        <h3 className="title">Work</h3> 
        <img className="image2" src='./assets/images/IMG-2628.JPG' alt="Painted Apartment"/>
        <img className="image3" src='./assets/images/IMG-1906.jpg' alt="Installing roof shingles"/>
        <img className="image4" src='./assets/images/Screen Shot 2023-02-26 at 9.33.24 PM.png' alt="TRAVEL"/>
      </section>
    </>
  );
}

export default App;
