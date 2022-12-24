import { useState, useEffect } from 'react'

export function useLocalStorage(id) {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
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

  return [favorites, toggleFavorites]
}
