import React from 'react';
import '../assets/css/style.css';

function Homepage() {
  return (
    <div className='app'>
      <header>Eduardo Mandujano <br/>Software Engineer</header>
      <nav>
        <h1>Eduardo Mandujano</h1>
        <ul className="navigation"> 
          <li><a href="#about-me" className="nav-link">About Me</a></li>
          <li><a href="#work" className="nav-link">Work</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
      <div>
        <button id="button1"><a href="https://github.com/EMandujano20">Github</a></button>
        <button id="button2"><a href="mailto:mandujanolalo@gmail.com">Gmail</a></button>
      </div>
      <section id="about-me">
        <div>
          <h2 className="title">About Me</h2>       
          <img className="image1" id="object-position" src='./assets/images/IMG_0738.jpeg' alt="Most Recent Pic with my Sisters"/>
          <p className="text">Hello welcome to my Portfolio. My name is Eduardo Mandujano. I am 23 years old, I am the youngest of three. I have been working in construction for the past 5 years and have been studying to work in emergency services for the past 2 years. But I have always wanted to break into the tech field I'm hoping this course will take me where I want to go. I am originally from the Los Angeles area but a few months ago, I moved up to Yolo county, near Sacramento, to be closer to my girlfriend. Some of my hobbies include photography, playing video games, playing sports and working on my 1965 Mustang that me and my father are rebuilding together. </p>
        </div>
      </section>
      <section id="work">
        <h3 className="title">Work</h3> 
        <img className="image2" src='./assets/images/IMG-2628.JPG' alt="Painted Apartment"/>
        <img className="image3" src='./assets/images/IMG-1906.jpg' alt="Installing roof shingles"/>
        <img className="image4" src='./assets/images/Screen Shot 2023-02-26 at 9.33.24 PM.png' alt="TRAVEL"/>
      </section>
      <section id="contact">
        <h3 className="title">Contact</h3>
        <p className="text">You can contact me at:</p>
        <ul>
          <li>Email: mandujanolalo@gmail.com</li>
          <li>Phone: 123-456-7890</li>
        </ul>
      </section>
    </div>
  );
}

export default Homepage;
