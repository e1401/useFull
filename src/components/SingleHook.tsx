import { Container, Button, Stack } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeHook } from '../store';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Link } from 'react-router-dom';
import './SingleHook.css';

function SingleHook({ id, title, body }: { id: number; title?: string; body?: string }) {
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    console.log('hook id is', id);
    dispatch(removeHook(id));
  };

  let stringId = id.toString();
  return (
    <Container fluid="sm" className=" mt-5 mb-5">
      <div className="viewHook">
        <h3> {title}</h3>
        <p>Code:</p>

        <SyntaxHighlighter
          language="javascript"
          style={docco}
          showLineNumbers={true}
          wrapLines={true}>
          {body}
        </SyntaxHighlighter>
        <Stack direction="horizontal" gap={3}>
          <Link to={`/hooks/${stringId}`}>
            <Button variant="primary">View</Button>
          </Link>
          <Button variant="danger" onClick={() => handleDelete(id)}>
            Delete
          </Button>
        </Stack>
      </div>
    </Container>
  );
}

export default SingleHook;
