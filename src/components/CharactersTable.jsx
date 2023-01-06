import { useContext } from 'react'
import { CharacterContext } from '../contexts/CharactersContext'
import styles from '../css/CharactersTable.module.css'
import CharacterRow from './CharacterRow'
import Pagination from './Pagination'
import SearchFilters from './SearchFilters'

export default function CharactersTable() {
  const { characters, toggleFavorites, isFavorite } =
    useContext(CharacterContext)

  return (
    <>
      <SearchFilters />
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
      <Pagination />
    </>
  )
}
