import { useState, useEffect } from 'react'
import { useFirstRender } from './useFirstRender'

export function useLocalStorage(id) {
  const [favorites, setFavorites] = useState([])
  const isFirstRender = useFirstRender()

  useEffect(() => {
    if (isFirstRender) {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites'))
      return storedFavorites === null
        ? localStorage.setItem('favorites', JSON.stringify(favorites))
        : setFavorites(storedFavorites)
    }
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorites = (id) => {
    //    check if favorites includes id and if so, remove it
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favorite) => favorite !== id))
    } else {
      //    if not, add it
      setFavorites([...favorites, id])
    }
  }

  const isFavorite = (id) => favorites.includes(id)

  return [favorites, toggleFavorites, isFavorite]
}
