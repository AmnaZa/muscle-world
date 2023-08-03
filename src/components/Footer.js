import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <nav aria-label="Main Navigation" role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/exercises">Exercises</Link>
          </li>
          <li>
            <Link to="/nutrients">Nutrients</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <p>&copy; 2023 Your Website. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
