import { useRef, useEffect } from 'react'

// custom hook to check if it's the first render
export function useFirstRender() {
  const isFirstRender = useRef(true)

  useEffect(() => {
    isFirstRender.current = false
  }, [])

  return isFirstRender.current
}
