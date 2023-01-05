import { useContext, useState } from 'react'
import { CharacterContext } from '../contexts/CharactersContext'
import styles from '../css/SearchFilters.module.css'

export default function SearchFilters() {
  const [name, setName] = useState('')
  const { requestCharacters } = useContext(CharacterContext)

  const handleName = async (e) => {
    setName(e.target.value)
  }

  const handleRequest = (e) => {
    e.preventDefault()
    requestCharacters(
      `https://rickandmortyapi.com/api/character/?page=2&name=${name}`
    )
  }

  return (
    <form
      onSubmit={(e) => handleRequest(e)}
      className={styles.SearchFiltersContainer}
    >
      <div className={styles.SearchFilterInputContainer}>
        <input
          onChange={(e) => handleName(e)}
          value={name}
          type="text"
          placeholder="Search by name..."
        />
        <button>Enter</button>
      </div>
      <label htmlFor="favorites">
        Favorites
        <input type="checkbox" id="favorites" />
      </label>
    </form>
  )
}
