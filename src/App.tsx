import Navbar from './components/navbar';
import { Container } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container fluid="sm" className=" mt-3">
        <p>todo: Login form</p>
      </Container>
    </div>
  );
}

export default App;
