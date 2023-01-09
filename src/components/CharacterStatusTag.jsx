import styles from '../css/CharacterStatusTag.module.css'

export default function CharacterStatusTag({ status }) {
  const handleStatus = () => {
    return status === 'Alive'
      ? styles.alive
      : status === 'Dead'
      ? styles.dead
      : styles.unknown
  }

  return (
    <span className={[`${styles.CharacterStatusTag} ${handleStatus()}`]}>
      {status}
    </span>
  )
}
