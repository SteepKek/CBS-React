import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Card from './components/Card/Card.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card />
  </StrictMode>,
)
