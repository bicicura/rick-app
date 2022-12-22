import { useContext, useState } from 'react'
import { CharacterContext } from '../contexts/CharactersContext'
import styles from '../css/SearchFilters.module.css'

export default function SearchFilters() {
  const [name, setName] = useState('')
  const { requestCharacters } = useContext(CharacterContext)

  const handleName = async (e) => {
    setName(e.target.value)
  }

  const handleRequest = () => {
    requestCharacters(
      `https://rickandmortyapi.com/api/character/?page=2&name=${name}`
    )
  }

  return (
    <div className={styles.SearchFiltersContainer}>
      <div>
        <input
          onChange={(e) => handleName(e)}
          value={name}
          type="text"
          placeholder="Search by name..."
        />
        <button
          onClick={() => {
            handleRequest()
          }}
          type="button"
        >
          Find
        </button>
      </div>
      <input type="checkbox" />
    </div>
  )
}
