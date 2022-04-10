import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { removeHook } from '../store';

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
      <pre>
        <code>{body}</code>
      </pre>
      <Button variant="danger" onClick={() => handleDelete(id)}>
        Delete
      </Button>
    </div>
  );
}

export default SingleHook;
