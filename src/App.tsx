import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Hooks from './pages/Hooks';
import HookList from './pages/hookList';
import CreateHook from './pages/createHook';
import ErrorPage from './pages/ErrorPage';
import './App.css';

import ViewSingleHook from './pages/ViewSingleHook';

function App() {
  return (
    // <div className="App d-flex flex-column min-vh-100">
    <div className="App d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="hooks" element={<Hooks />}>
            <Route path=":id" element={<ViewSingleHook />} />
            <Route path="list" element={<HookList />} />
            <Route path="create" element={<CreateHook />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
