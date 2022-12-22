import { useContext } from 'react'
import { CharacterContext } from '../contexts/CharactersContext'
import styles from '../css/CharactersTable.module.css'

export default function CharactersTable() {
  const { characters } = useContext(CharacterContext)

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
        {characters.map(({ id, name, species, status, image }) => (
          <tr key={id}>
            <td className={styles.characterNameContainer}>
              <div className={styles.characterThumbnailContainer}>
                <img src={image} />
              </div>
              <h3>{name}</h3>
            </td>
            <td>{species}</td>
            <td>{status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
