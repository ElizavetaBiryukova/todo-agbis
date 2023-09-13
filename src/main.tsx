import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/App'
import './index.css'
import './18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
