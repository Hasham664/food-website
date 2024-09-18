import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import StoreContextProvider from './Context/StoreContext.jsx';
// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContextProvider>
    <App />
  </StoreContextProvider>
  </BrowserRouter>
)
