import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './AppReset.css';
import './App.css';

// Importing images
import avatarImg from './assets/images/Avatar.png';
import firstProjectImg from './assets/images/1st-project-img.JPG';
import secondProjectImg from './assets/images/2nd-project-img.JPG';
import thirdProjectImg from './assets/images/3rd-project-img.jpg';
// Add other image imports as needed

function App() {
  return (
    <>
      <header>
        <h1>Jack's Portfolio</h1>
        <nav>
            <ul>
                <li>
                    <a href="#about-me">About Me</a>
                </li>
                <div className="line"></div>
                <li>
                    <a href="#pp-application">Applications</a>
                </li>
                <div className="line"></div>
                <li>
                    <a href="#contact-info">Contact Information</a>
                </li>
            </ul>
        </nav>
      </header>

      <section className="about-me" id="about-me">
        <div>
            <h2>About Me</h2>
            <p>
                My name is Jack, and I have been interested in the coding industries for a while...
            </p>
            <img src={avatarImg} alt="Image of developer's Avatar"/>
        </div>
      </section>

      <section className="pp-application" id="pp-application">
        <h2>Past Present Application</h2>
        <div className="projects-grid">
            <div className="card big-card">
                <h3>Horiseon Project</h3>
                <a href="https://jackw2023.github.io/horiseon-refactor-homework/">
                    <img src={firstProjectImg} alt="Image of the Pre-Work"/>
                </a>
                <a href="https://jackw2023.github.io/horiseon-refactor-homework/">Polishing</a>
            </div>

            <div className="projects-row">
                <div className="card">
                    <h3>My Portfolio</h3>
                    <a href="https://jackw2023.github.io/Jack-s-Portfolio/">
                        <img src={secondProjectImg} alt="Image of the Portfolio"/>
                    </a>
                    <a href="https://jackw2023.github.io/Jack-s-Portfolio/">In Progress</a>
                </div>

                {/* Repeat for other projects */}
                <div className="card">
                    <h3>Project 3</h3>
                    <img src={thirdProjectImg} alt="Image of Project 3"/>
                    <a>TBA</a>
                </div>
                {/* Add other project sections as needed */}
            </div>
        </div>
      </section>

      <footer className="contact-info" id="contact-info">
          <h2>Contact Information</h2>
          <ul>
              <li>Name: Jack W</li>
              <li>Email: daxon2012@gmail.com</li>
              <li>Github: <a href="https://github.com/JackW2023">My Github</a></li>
          </ul>
      </footer>
    </>
  );
}

export default App;
