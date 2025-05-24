import React from 'react';
import chinnu from '../assets/chinnu.jpg';  

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-container">
        <div className="home-text">
          <h2>Welcome to My Portfolio</h2>
            <p>Hello! I'm <strong>B. Likhitha Sri Satya</strong>, 
              an enthusiastic and motivated B.Tech ECE graduate from <strong>NIT JAMSHEDPUR</strong>. 
              I'm passionate about building innovative web applications and solving complex problems. 
              I specialize in the <strong>MERN stack</strong> (MongoDB/MySQL, Express.js, React, Node.js) 
              and love crafting clean, responsive user experiences.
            </p>
        </div>
        <div className="profile-pic">
          <img src={chinnu} alt="My Portrait" />
        </div>
      </div>
    </section>
  );
};

export default Home;
    