import './App.css';
import { useState, useEffect, useRef } from 'react';
import * as esbuild from 'esbuild-wasm';
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';

function App() {
  const [input, setInput] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const ref = useRef<any>();

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: '/esbuild.wasm'
    });
  };

  const onClick = async () => {
    if (!ref.current) {
      return;
    }
    const result = await ref.current.build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin()]
    });

    console.log('result is', result);

    setCode(result.outputFiles[0].text);
    setInput('');
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
      <pre>{code}</pre>
    </div>
  );
}

export default App;
