import { useContext, useState } from 'react'
import { CharacterContext } from '../contexts/CharactersContext'
import styles from '../css/Pagination.module.css'

export default function Pagination() {
  const { info, requestPage, characters } = useContext(CharacterContext)

  return (
    characters && (
      <div className={styles.pagintaionContainer}>
      <button
        disabled={info.prev === null ? true : false}
        data-page="prev"
        onClick={(e) => {
          requestPage(e)
        }}
        type="button"
      >
        Previous
      </button>
      <button
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
