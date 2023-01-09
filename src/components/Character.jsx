import { useEffect, useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from '../css/Character.module.css'
import { CharacterContext } from '../contexts/CharactersContext'
import CharacterStatusTag from './CharacterStatusTag'

export default function Character() {
  const { id } = useParams()
  const { favorites, toggleFavorites, isFavorite } =
    useContext(CharacterContext)

  const [character, setCharacter] = useState({})
  const [showEpisodes, setShowEpisodes] = useState(false)

  const handleStatus = () => {
    return character.status === 'Alive'
      ? styles.alive
      : character.status === 'Dead'
      ? styles.dead
      : styles.unknown
  }

  useEffect(() => {
    ;(async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      const data = await res.json()
      setCharacter(data)
    })()
  }, [])

  return (
    <>
      <Link to="/">
        <div className={styles.goBackBtn}>
          <svg viewBox="0 0 48 48" className="fill-gray-500">
            <path d="M24 40 8 24 24 8 26.1 10.1 13.7 22.5H40V25.5H13.7L26.1 37.9Z" />
          </svg>
          <span>Characters list</span>
        </div>
      </Link>
      <section className={styles.CharacterCardContainer}>
        <div className={styles.CharacterCard}>
          <header className={styles.CharacterCardHeaderContainer}>
            <div className={styles.CharacterCardHeader}>
              <div className={styles.CharacterImageContainer}>
                <img src={character.image} alt="" />
              </div>
              <div>
                <div className={styles.CharacterHeaderTitle}>
                  <h1>{character.name}</h1>
                  <CharacterStatusTag status={character.status} />
                </div>
                <h3>Record created {character.created} days ago.</h3>
              </div>
            </div>
            <div>
              <button
                className={styles.CharacterFavoriteButton}
                onClick={() => toggleFavorites(id)}
              >
                <svg
                  fill={isFavorite(id) ? 'yellow' : 'none'}
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </button>
            </div>
          </header>
          <div className={styles.CharacterInformationContainer}>
            <div>
              <h3 className={styles.CharacterInformationTitle}>Full Name</h3>
              <p>{character.name}</p>
            </div>
            <div>
              <h3 className={styles.CharacterInformationTitle}>Type</h3>
              <p>{character.type}</p>
            </div>
            <div>
              <h3 className={styles.CharacterInformationTitle}>Gender</h3>
              <p>{character.gender}</p>
            </div>
            <div>
              <h3 className={styles.CharacterInformationTitle}>Location</h3>
              <p>{character.location?.name}</p>
            </div>
          </div>
          <footer>
            <div>
              <button onClick={() => setShowEpisodes(!showEpisodes)}>
                Show episodes
              </button>
              <ul>
                {showEpisodes &&
                  character.episode.map((episode) => (
                    <li>
                      <a href={episode}>{episode}</a>
                    </li>
                  ))}
              </ul>
            </div>
          </footer>
        </div>
      </section>
    </>
  )
}
