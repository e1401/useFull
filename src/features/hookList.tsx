import Navbar from '../components/navbar';
import { Container } from 'react-bootstrap';
import '../App.css';

function HookList() {
  return (
    <div className="App">
      <Navbar />
      <Container fluid="sm" className=" mt-3">
        <p>todo: display a list of hooks</p>
      </Container>
    </div>
  );
}

export default HookList;
