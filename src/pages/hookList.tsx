import { useSelector, useDispatch } from 'react-redux';
import { removeHook } from '../store';

import { Container, Button } from 'react-bootstrap';
import { selectHooks } from '../store';
import '../App.css';

function HookList() {
  const hooks = useSelector(selectHooks);
  const dispatch = useDispatch();
  console.log(hooks);

  const handleDelete = (id: number) => {
    console.log('hook id is', id);
    dispatch(removeHook(id));
  };

  return (
    <div className="App">
      <Container fluid="sm" className=" mt-3">
        <h2>List of hooks</h2>
        {hooks.map((hook) => (
          <div key={hook.id}>
            <div className="viewHook">
              <h3>Title:</h3>
              <p> {hook.title}</p>
              <h3>Code:</h3>
              <pre>
                <code>{hook.body}</code>
              </pre>
              <Button variant="danger" onClick={() => handleDelete(hook.id)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default HookList;
