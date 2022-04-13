import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeHook } from '../store';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function SingleHook({ id, title, body }: { id: number; title: string; body: string }) {
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    console.log('hook id is', id);
    dispatch(removeHook(id));
  };
  return (
    <div className="viewHook">
      <h3>Title:</h3>
      <p> {title}</p>
      <h3>Code:</h3>

      <SyntaxHighlighter
        language="javascript"
        style={docco}
        showLineNumbers={true}
        wrapLines={true}>
        {body}
      </SyntaxHighlighter>
      <Button variant="danger" onClick={() => handleDelete(id)}>
        Delete
      </Button>
    </div>
  );
}

export default SingleHook;
