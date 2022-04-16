import { Container, Row } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="footer mt-auto py-3">
      <Container fluid className="mt-5">
        <Row xs={1} md={2} className="justify-content-end">
          <div className="mb-3">
            <p className="fs-6 text-muted">
              TypeScript adventures with <a href="http://ah-studio.net">Ah-studio</a> in {year}{' '}
            </p>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
