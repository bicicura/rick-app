import { createContext, useEffect, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const CharacterContext = createContext()

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState([])
  const [favoritesList, setFavoritesList] = useState(false)
  const [favorites] = useLocalStorage()

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

  useEffect(() => {
    ;(async function () {
      if (favoritesList) {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/${favorites.toString()}`
        )
        const data = await res.json()
        return setCharacters(data)
      }
      const data = await requestCharacters()
    })()
  }, [favoritesList])

  return (
    <CharacterContext.Provider
      value={{
        characters,
        info,
        requestPage,
        requestCharacters,
        setFavoritesList,
        favoritesList,
      }}
    >
      {children}
    </CharacterContext.Provider>
  )
}
