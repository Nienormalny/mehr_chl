import React from 'react';
import { Route, Routes } from 'react-router';
import Header from './components/header.component';
import HomePage from './pages/home/home.page';
import './styles/global.scss';

function App() {
  return (
    <div id="mehr_chl_for_you">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
