import styles from "./Header.module.scss"

export const Header = () => {
  return (
    <div className={styles.header}>
      <span className={styles.sitename}>YakireWeather</span>
      <span>Menu</span>
    </div>
  )
}
