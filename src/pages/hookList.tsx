import { useSelector, useDispatch } from 'react-redux';

import { Container } from 'react-bootstrap';
import '../App.css';
import { selectHooks } from '../store';

function HookList() {
  const hooks = useSelector(selectHooks);
  console.log(hooks);
  return (
    <div className="App">
      <Container fluid="sm" className=" mt-3">
        {hooks.map((hook) => (
          <li key={hook.id}>
            <p>{hook.title}</p>
            <p>{hook.body}</p>
          </li>
        ))}
      </Container>
    </div>
  );
}

export default HookList;
