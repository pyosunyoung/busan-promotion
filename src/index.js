import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Center from './Area/Center';
import EastCoast from './Area/EastCoast';
import NorthEast from './Area/NorthEast';
import NorthwestAndOutlying from './Area/NorthwestAndOutlying';
import Western from './Area/Western';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Center" element={<Center/>} /> {/* Busanju 페이지 라우팅 */}
        <Route path="/EastCoast" element={<EastCoast/>} />
        <Route path="/NorthEast" element={<NorthEast/>} />
        <Route path="/NorthwestAndOutlying" element={<NorthwestAndOutlying/>} />
        <Route path="/Western" element={<Western/>} />
      </Routes>
      
    </Router>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
