import { useState } from 'react';

import Navbar from '../components/navbar';
import '../App.css';
function CreateHook() {
  //state elements:
  //hookTitle
  //hookBody
  //complete hook
  const [hookTitle, setHookTitle] = useState('');
  const [hookBody, setHookBody] = useState('');
  const [completeHook, setCompleteHook] = useState({
    title: '',
    body: ''
  });

  const handleTitleChange = (e: any) => {
    setHookTitle(e.target.value);
  };

  const handleBodyChange = (e: any) => {
    setHookBody(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (hookTitle.length === 0 || hookBody.length === 0) {
      alert('Please enter hook title and hook code ');
      return;
    }
    setCompleteHook({ title: hookTitle, body: hookBody });
    setHookTitle('');
    setHookBody('');
  };

  return (
    <div className="createHook">
      <Navbar />
      <h1>Create a hook</h1>
      <form onSubmit={handleSubmit} className="createHookForm">
        <input
          type="text"
          placeholder="Hook title"
          value={hookTitle}
          onChange={handleTitleChange}
        />
        <br />
        <textarea
          rows={10}
          cols={20}
          placeholder="Hook body"
          value={hookBody}
          onChange={handleBodyChange}
        />
        <br />
        <button type="submit">Submit hook</button>
      </form>
      <div>
        {Object.keys(completeHook.title).length === 0 ? null : (
          <div className="viewHook">
            <h2>View hook</h2>
            <h3>Title:</h3>
            <p> {completeHook.title}</p>
            <h3>Code:</h3>
            <pre>
              <code>{completeHook.body}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateHook;
