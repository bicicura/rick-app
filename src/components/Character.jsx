import { useParams } from 'react-router-dom'

export default function Character() {
  const { id } = useParams()

  return (
    <>
      <h1>Character {id}</h1>
    </>
  )
}
