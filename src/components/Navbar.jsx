import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="brand">
          <NavLink href="/">
            <img src="/Logo.png" alt="Logo" style={{ height: '80px', width: 'auto' }} />
          </NavLink>
        </div>
        
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>☰</button>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/temples" onClick={() => setIsOpen(false)}>Temples</NavLink>
          <NavLink to="/gallery" onClick={() => setIsOpen(false)}>Gallery</NavLink>
          <NavLink to="/booking" onClick={() => setIsOpen(false)}>Booking & Inquiry</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact & Reviews</NavLink>
        </div>
      </nav>
    </header>
  );
}