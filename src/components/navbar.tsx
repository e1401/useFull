import { Link } from 'react-router-dom';
import './navbar.css';
import { Navbar, Container } from 'react-bootstrap';

function Nav() {
  return (
    <nav>
      <Navbar bg="light" className="mb-3">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <strong>useFull</strong>
            </Navbar.Brand>
          </Link>
          <div className="navbarItems">
            <li>
              <Link to="hooks/create">Create a hook</Link>
            </li>

            <li>
              <Link to="hooks/list">List of hooks</Link>
            </li>
            <li>
              {/* todo */}
              <Link to="/">Logout</Link>
            </li>
          </div>
        </Container>
      </Navbar>
    </nav>
  );
}

export default Nav;
