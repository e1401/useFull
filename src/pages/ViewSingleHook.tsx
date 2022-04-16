import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectHooks, removeHook } from '../store';
import { Container, Button } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

type idParams = {
  id: string;
};

function ViewSingleHook() {
  const { id } = useParams<idParams>();
  const hooks = useSelector(selectHooks);
  console.log('hooks are', hooks);

  let convertedId: number;

  if (id !== undefined) {
    convertedId = +id;
  }

  const selectedHook = hooks.filter((hook) => hook.id === convertedId);

  console.log('selectedHook', selectedHook);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleDelete = (id: number) => {
    console.log('hook id is', id);
    dispatch(removeHook(id));
    navigate('/hooks/list');
  };

  return (
    <Container fluid="sm" className=" mt-5">
      <div className="viewHook">
        <h3> {selectedHook[0].title}</h3>
        <p>Code:</p>

        <SyntaxHighlighter
          language="javascript"
          style={docco}
          showLineNumbers={true}
          wrapLines={true}>
          {selectedHook[0].body}
        </SyntaxHighlighter>
        <Button variant="danger" onClick={() => handleDelete(convertedId)}>
          Delete
        </Button>
      </div>
    </Container>
  );
}

export default ViewSingleHook;
