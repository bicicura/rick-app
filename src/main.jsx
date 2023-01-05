import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CharacterProvider } from './contexts/CharactersContext'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CharacterProvider>
        <App />
      </CharacterProvider>
    </BrowserRouter>
  </React.StrictMode>
)
