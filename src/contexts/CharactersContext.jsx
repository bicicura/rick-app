import { createContext, useEffect, useState } from 'react'

export const CharacterContext = createContext()

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState([])

  const requestPage = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setCharacters(data.results)
    setInfo(data.info)
  }

  useEffect(() => {
    ;(async function () {
      const res = await fetch('https://rickandmortyapi.com/api/character')
      const data = await res.json()
      setCharacters(data.results)
      setInfo(data.info)
    })()
  }, [])

  return (
    <CharacterContext.Provider value={{ characters, info, requestPage }}>
      {children}
    </CharacterContext.Provider>
  )
}
