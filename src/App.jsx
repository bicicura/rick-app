import './App.css'
import { Route, Routes } from 'react-router-dom'
import Character from './components/Character'
import CharactersTable from './components/CharactersTable'

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<CharactersTable />} />
        <Route path="/character/:id" element={<Character />} />
      </Routes>
    </main>
  )
}

export default App
