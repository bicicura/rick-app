import './App.css'
import CharactersTable from './components/CharactersTable'
import Pagination from './components/Pagination'
import SearchFilters from './components/SearchFilters'

function App() {
  return (
    <main>
      <SearchFilters />
      <CharactersTable />
      <Pagination />
    </main>
  )
}

export default App
