import { createContext, useEffect, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const CharacterContext = createContext()

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState([])
  const [favoritesList, setFavoritesList] = useState(false)
  const [favorites, toggleFavorites, isFavorite] = useLocalStorage()

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

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  const requestCharacters = async (
    url = 'https://rickandmortyapi.com/api/character'
  ) => {
    const res = await fetch(url)
    const data = await res.json()

    if (data.info) setInfo(data.info)

    // differents respones we may get from API, this contemplates if the results has no info, if res is only one character or if it has multiple and info attached
    return Array.isArray(data)
      ? setCharacters(data)
      : data.hasOwnProperty('name')
      ? setCharacters([data])
      : setCharacters(data.results)
  }

  // Request favorites when favoritesList is true
  useEffect(() => {
    ;(async function () {
      if (favoritesList) {
        if (favorites.length === 0) {
          return setCharacters([])
        }

        return await requestCharacters(
          `https://rickandmortyapi.com/api/character/${favorites.toString()}`
        )
      }
      return await requestCharacters()
    })()
  }, [favoritesList])

  // initial render request
  useEffect(() => {
    ;(async function () {
      const data = await requestCharacters()
    })()
  }, [])

  return (
    <CharacterContext.Provider
      value={{
        characters,
        info,
        requestPage,
        requestCharacters,
        setFavoritesList,
        favoritesList,
        favorites,
        toggleFavorites,
        isFavorite,
      }}
    >
      {children}
    </CharacterContext.Provider>
  )
}
