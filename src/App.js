import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import logo from './trivia.png';
import './App.css';
import AppRoutes from './routes/index';

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
