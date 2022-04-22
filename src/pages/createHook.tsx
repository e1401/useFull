import { useDispatch } from 'react-redux';
import { addHook } from '../store';
import { useState } from 'react';

// import Navbar from '../components/navbar';
import { Button, Container, Form, FormGroup } from 'react-bootstrap';
// import '../App.css';
function CreateHook() {
  //state elements:
  //hookTitle
  //hookBody
  //complete hook
  const [hookTitle, setHookTitle] = useState<string>('');
  const [hookBody, setHookBody] = useState<string>('');

  //dispatch to store
  const dispatch = useDispatch();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHookTitle(e.target.value);
  };

  const handleBodyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHookBody(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (hookTitle.length === 0 || hookBody.length === 0) {
      alert('Please enter hook title and hook code');
      return;
    }

    dispatch(addHook({ title: hookTitle, body: hookBody }));
    setHookTitle('');
    setHookBody('');
  };
  // console.log(completeHook);

  return (
    <div className="createHook">
      <Container fluid="sm" className=" mt-3">
        <h1>Create a hook</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              value={hookTitle}
              onChange={handleTitleChange}
              placeholder="Hook title"
            />
          </Form.Group>
          <FormGroup>
            <Form.Control
              as="textarea"
              placeholder="Hook body"
              value={hookBody}
              onChange={handleBodyChange}
              style={{ height: '200px' }}
            />
          </FormGroup>
          <br />
          <Button variant="primary" type="submit">
            Submit hook
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default CreateHook;
