import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from './dark-mode'; // Import the useDarkMode hook
import './Static/navbar.css'; // Your navbar styles file

const CustomNavbar = () => {
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useDarkMode(); // Access dark mode state and toggle function

  return (
    <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container">
        <Link className={`navbar-brand ${location.pathname === '/static-array' ? 'active' : ''}`} to="/static-array">Array Playground</Link>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? '🌙' : '☀️'}
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/static-array' ? 'active' : ''}`} to="/static-array">Static Array</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/dynamic-array' ? 'active' : ''}`} to="/dynamic-array">Dynamic Array</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;