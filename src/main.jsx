import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  // El modo estricto ayuda a identificar componentes que tiene life cycle
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
)
