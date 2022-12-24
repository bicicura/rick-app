import { useContext } from 'react'
import { CharacterContext } from '../contexts/CharactersContext'
import styles from '../css/CharactersTable.module.css'
import CharacterRow from './CharacterRow'
import { useLocalStorage } from '../hooks/useLocalStorage'

export default function CharactersTable() {
  const { characters } = useContext(CharacterContext)
  const [favorites, toggleFavorites, isFavorite] = useLocalStorage()

  return (
    <table className={styles.tableContainer}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Species</th>
          <th>Status</th>
          <th>
            <button>Restore filters</button>
          </th>
        </tr>
      </thead>
      <tbody>
        {characters ? (
          characters.map((character) => (
            <CharacterRow
              character={character}
              key={character.id}
              toggleFavorites={toggleFavorites}
              isFavorite={isFavorite}
            />
          ))
        ) : (
          <tr>
            <td>
              <h3>No characters found</h3>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
