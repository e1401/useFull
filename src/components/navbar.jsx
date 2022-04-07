import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div className="navbarContainer">
      <h3>useFull</h3>

      <div className="navbarItems">
        <li>
          <Link to="/createhook">Create a hook</Link>
        </li>

        <li>
          <Link to="/hooklist">List of hooks</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
