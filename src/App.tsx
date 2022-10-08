import './App.css';
import { useState, useEffect } from 'react';
import * as esbuild from 'esbuild-wasm';

function App() {
  const [input, setInput] = useState<string>('');
  const [code, setCode] = useState<string>('');

  const onClick = () => {
    console.log(input);
    setInput('');
  };

  const startService = async () => {
    const service = await esbuild.startService({
      worker: true,
      wasmURL: '/esbuild.wasm'
    });
    console.log(service);
  };

  useEffect(() => {
    startService();
  }, []);

  return (
    <div className="App">
      <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <pre>lorem</pre>
    </div>
  );
}

export default App;
