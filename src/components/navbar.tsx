import { Link } from 'react-router-dom';
import './navbar.css';
import { Navbar, Container } from 'react-bootstrap';

function Nav() {
  return (
    //BOOTSTRAP NAVBAR
    <nav>
      <Navbar bg="light">
        <Container>
          <Link to="/">
            <Navbar.Brand>useFull</Navbar.Brand>
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
