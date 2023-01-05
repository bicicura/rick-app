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
        <div>
          <div>
            <img src="" alt="" />
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold leading-7 text-black">
                  Rick Sanchez s
                </h1>
                <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 capitalize bg-green-100 rounded-full">
                  Alive
                </span>
              </div>
              <h3 className="text-sm tracking-tight text-gray-500">
                {/* Record created {createdDate} */}
                Record created 1399 days ago.
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
        </div>
      </section>
    </>
  )
}
