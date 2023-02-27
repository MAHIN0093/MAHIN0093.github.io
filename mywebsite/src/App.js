import React, { useState } from 'react';
import './App.css';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="app-container">
      <header>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={showMenu ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <nav className={showMenu ? "show-menu" : ""}>
          <ul>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id='Logo'>
        
      </section>

      <section id="about-me" className="about-me">
        <h2>About Me</h2>
        <p>Hi, my name is John Doe and I'm a web developer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac placerat odio. Aliquam fermentum, magna et vulputate viverra, nunc libero vulputate lectus, eget laoreet orci augue eget est. Suspendisse vitae mollis metus. Pellentesque vel sodales nulla. In hac habitasse platea dictumst.</p>
      </section>

      <section id="skills" className="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
        </ul>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="projectlist">
        <div className="project">
          <h4>Project 1</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac placerat odio. Aliquam fermentum, magna et vulputate viverra, nunc libero vulputate lectus, eget laoreet orci augue eget est.</p>
          <a href="#">View Project</a>
        </div>
        <div className="project">
          <h4>Project 2</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac placerat odio. Aliquam fermentum, magna et vulputate viverra, nunc libero vulputate lectus, eget laoreet orci augue eget est.</p>
          <a href="#">View Project</a>
        </div>
        <div className="project">
          <h4>Project 3</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac placerat odio. Aliquam fermentum, magna et vulputate viverra, nunc libero vulputate lectus, eget laoreet orci augue eget est.</p>
          <a href="#">View Project</a>
        </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea> 
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>

  <footer>
    <p>Copyright © 2023</p>
  </footer>
</div>
);
}

export default App;
