import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from '../css/Character.module.css'

export default function Character() {
  const { id } = useParams()

  const [character, setCharacter] = useState({})

  useEffect(() => {
    ;(async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      const data = await res.json()
      console.log(data)
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
      <section>
        <div className={styles.CharacterCard}>
          <div className={styles.CharacterCardHeader}>
            <div className={styles.CharacterImageContainer}>
              <img src={character.image} alt="" />
            </div>
            <div>
              <div className={styles.CharacterHeaderTitle}>
                <h1 className="text-2xl font-bold leading-7 text-black">
                  {character.name}
                </h1>
                <span className={styles.CharacterStatusTag}>
                  {character.status}
                </span>
              </div>
              <h3 className="text-sm tracking-tight text-gray-500">
                Record created {character.created} days ago.
              </h3>
            </div>
          </div>
          <div>
            <button
              className={
                'text-yellow-300 transition-colors duration-150 ease-in-out cursor-pointer hover:text-yellow-300'
              }
            >
              <svg
                className="w-10 h-10 stroke-gray-800"
                fill="currentColor"
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
          <div className={styles.CharacterInformationContainer}>
            <div>
              <h3 className={styles.CharacterInformationTitle}>Full Name</h3>
              <p className="text-lg">{character.name}</p>
            </div>
            <div>
              <h3 className={styles.CharacterInformationTitle}>Type</h3>
              <p className="text-lg">{character.type}</p>
            </div>
            <div>
              <h3 className={styles.CharacterInformationTitle}>Gender</h3>
              <p className="text-lg">{character.gender}</p>
            </div>
            <div>
              <h3 className={styles.CharacterInformationTitle}>Location</h3>
              <p className="text-lg">{character.location?.name}</p>
            </div>
            <div className="col-span-2">
              <div>
                <ul>
                  <li className="relative">
                    <button type="button" className="w-full text-right">
                      <div className="w-full transition-all flex items-center gap-0.5">
                        <h3 className="text-sm font-bold leading-5 tracking-tight text-left text-gray-500 hover:underline">
                          Show Episodes
                        </h3>
                        <svg
                          className="w-4 h-4 transition-transform duration-150 ease-in-out"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
