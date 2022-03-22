import { useState } from 'react';

function CreateHook() {
  //state elements:
  //hookTitle
  //hookBody
  //complete hook
  const [hookTitle, setHookTitle] = useState('');
  const [hookBody, setHookBody] = useState('');
  const [completeHook, setCompleteHook] = useState('');

  const handleTitleChange = (e) => {
    setHookTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setHookBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hookTitle.length === 0 || hookBody.length === 0) {
      alert('Please enter hook title and hook code ');
    }
    setCompleteHook({ title: hookTitle, body: hookBody });
    setHookTitle('');
    setHookBody('');
  };

  return (
    <div className="createHook">
      <h1>Enter the hook</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Hook title"
          value={hookTitle}
          onChange={handleTitleChange}
        />
        <textarea
          type="text"
          placeholder="Hook body"
          value={hookBody}
          onChange={handleBodyChange}
        />
        <button type="submit">Submit hook</button>
      </form>
      <div>
        {completeHook.length === 0 ? (
          ''
        ) : (
          <div>
            <h2>View hook</h2>
            <h3>Title:</h3>
            <p> {completeHook.title}</p>
            <h3>Code:</h3>
            <pre>
              <code>{completeHook.body}</code>
            </pre>
          </div>
        )}
        {console.log(completeHook)}
      </div>
    </div>
  );
}

export default CreateHook;
