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

  const requestCharacters = async (
    url = 'https://rickandmortyapi.com/api/character'
  ) => {
    const res = await fetch(url)
    const data = await res.json()
    setCharacters(data.results)
    setInfo(data.info)
  }

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
