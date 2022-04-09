import { Link } from 'react-router-dom';
import './navbar.css';
import { Navbar, Container } from 'react-bootstrap';

function Nav() {
  return (
    // <div className="navbarContainer">
    //   <Link to="/">
    //     <h3>useFull</h3>
    //   </Link>

    //
    //     <li></li>
    //   </div>
    // </div>

    //BOOTSTRAP NAVBAR
    <>
      <Navbar bg="light">
        <Container>
          <Link to="/">
            <Navbar.Brand>useFull</Navbar.Brand>
          </Link>
          <div className="navbarItems">
            <li>
              <Link to="/createhook">Create a hook</Link>
            </li>

            <li>
              <Link to="/hooklist">List of hooks</Link>
            </li>
            <li>
              {/* todo */}
              <Link to="/">Logout</Link>
            </li>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Nav;
