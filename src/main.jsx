import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { CreateFavourite } from './Context/Context.jsx'
import TwoLogics from './Context/Context.jsx';

createRoot(document.getElementById('root')).render(
  <TwoLogics>
  <StrictMode>
    <App />
  </StrictMode>
  </TwoLogics>
)
