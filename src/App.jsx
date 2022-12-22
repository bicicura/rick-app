import './App.css'
import CharactersTable from './components/CharactersTable'
import Pagination from './components/Pagination'
import SearchFilters from './components/SearchFilters'

function App() {

  return (
    <>
    <SearchFilters />
    <CharactersTable />
    <Pagination />
    </>
  )
}

export default App
