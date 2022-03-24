import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div className="navbarContainer">
      <Link to="/">
        <h3>useFull</h3>
      </Link>

      <div className="navbarItems">
        <li>
          <Link to="/createhook">Create a hook</Link>
        </li>

        <li>
          <Link to="/hooklist">List of hooks</Link>
        </li>
        <li></li>
      </div>
    </div>
  );
}

export default Navbar;
