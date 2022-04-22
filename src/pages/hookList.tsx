import { useSelector } from 'react-redux';

import { Container } from 'react-bootstrap';
import { selectHooks } from '../store';
import SingleHook from '../components/SingleHook';
import '../App.css';

function HookList() {
  const hooks = useSelector(selectHooks);

  return (
    <div className="App">
      <Container fluid="sm" className=" mt-3">
        <h2>List of hooks</h2>

        {hooks.map((hook) =>
          hook.id !== undefined ? (
            <SingleHook key={hook.id} id={hook.id} title={hook.title} body={hook.body} />
          ) : (
            <p>ID is undefined</p>
          )
        )}
      </Container>
    </div>
  );
}

export default HookList;
