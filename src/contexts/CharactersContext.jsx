import { createContext, useEffect, useState } from 'react'

export const CharacterContext = createContext()

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState([])

  const requestPage = async (e) => {
    let url
    switch (e.target.dataset.page) {
      case 'prev':
        url = info.prev
        break

      case 'next':
        url = info.next
        break
    }

    const res = await fetch(url)
    const data = await res.json()
    setCharacters(data.results)
    setInfo(data.info)
  }

  const requestCharacters = async (
    url = 'https://rickandmortyapi.com/api/character'
  ) => {
    const res = await fetch(url)
    const data = await res.json()
    setCharacters(data.results)
    setInfo(data.info)
  }

  // initial render request
  useEffect(() => {
    ;(async function () {
      const data = await requestCharacters()
    })()
  }, [])

  return (
    <CharacterContext.Provider
      value={{ characters, info, requestPage, requestCharacters }}
    >
      {children}
    </CharacterContext.Provider>
  )
}
