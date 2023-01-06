import { useContext, useEffect, useState } from 'react'
import { CharacterContext } from '../contexts/CharactersContext'
import styles from '../css/Pagination.module.css'

export default function Pagination() {
  const { info, requestPage, characters } = useContext(CharacterContext)
  const [isScrolling, setIsScrolling] = useState(false)

  const handleDisabled = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })

    if (info.prev === null) {
      return true
    }
    return false
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [isScrolling])

  return (
    characters && (
      <div className={styles.pagintaionContainer}>
        <button
          className={styles.PaginationButton}
          disabled={handleDisabled()}
          data-page="prev"
          onClick={(e) => {
            requestPage(e)
          }}
          type="button"
        >
          Previous
        </button>
        <button
          className={styles.PaginationButton}
          disabled={info.next === null ? true : false}
          data-page="next"
          onClick={(e) => {
            requestPage(e)
          }}
          type="button"
        >
          Next
        </button>
      </div>
    )
  )
}
