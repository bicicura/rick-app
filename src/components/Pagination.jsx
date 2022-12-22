import { useContext, useState } from 'react'
import { CharacterContext } from '../contexts/CharactersContext'

export default function Pagination() {
  const { info, requestPage } = useContext(CharacterContext)

  return (
    <div>
      <button
        disabled={info.prev === null ? true : false}
        onClick={() => {
          requestPage(info.prev)
        }}
        type="button"
      >
        Previous
      </button>
      <button
        disabled={info.next === null ? true : false}
        onClick={() => {
          requestPage(info.next)
        }}
        type="button"
      >
        Next
      </button>
    </div>
  )
}
