import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';
// import App from './App';
import Login from './pages/Login';
import HookList from './pages/hookList';
import CreateHook from './pages/createHook';
import Nav from './components/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/hooklist" element={<HookList />} />
          <Route path="/createhook" element={<CreateHook />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
