import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Navbar';
import Login from './pages/Login';
import HookList from './pages/hookList';
import CreateHook from './pages/createHook';
import ErrorPage from './pages/ErrorPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/hooklist/*" element={<HookList />} />

          <Route path="/createhook" element={<CreateHook />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
