import { useContext, useEffect, useState } from 'react'
import { CharacterContext } from '../contexts/CharactersContext'
import styles from '../css/Pagination.module.css'

export default function Pagination() {
  const { info, requestPage, characters } = useContext(CharacterContext)

  const handleDisabled = () => (info.prev === null ? true : false)

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
