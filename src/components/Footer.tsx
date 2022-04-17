import { Container, Row } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="footer mt-auto py-3">
      <Container fluid className="mt-5">
        <Row>
          <div className="mb-2 d-flex flex-row-reverse">
            <p
              className="fs-9
             text-muted small">
              Adventures in TypeScript; <a href="http://ah-studio.net">Ah-studio</a> (c) {year}{' '}
            </p>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
