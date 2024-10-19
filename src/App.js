import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">Students Xerox</div>
        <nav className="nav">
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="hero" className="hero">
        <h1>Welcome to Students Xerox</h1>
        <p>We offer e-Seva, printing, xerox, and application services with quick and efficient service.</p>
      </section>

      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>e-Seva</h3>
            <p>Government applications, online services, and more.</p>
          </div>
          <div className="service-card">
            <h3>Printing</h3>
            <p>High-quality printing for all your needs.</p>
          </div>
          <div className="service-card">
            <h3>Xerox</h3>
            <p>Fast and affordable xerox services.</p>
          </div>
          <div className="service-card">
            <h3>Temple Ticket Booking</h3>
            <p>Book your temple tickets with ease.</p>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Us</h2>
        <p>Students Xerox provides essential services for students and the general public, ranging from xerox to e-Seva. Our goal is to make your tasks easier and more accessible.</p>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Call us: +91-9876543210</p>
        <p>Email: info@studentsxerox.com</p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Students Xerox</p>
      </footer>
    </div>
  );
}

export default App;
