import { FC } from "react"
import styles from "./FAB.module.scss"

interface IProps {
  onClick?: () => void
}
export const FAB: FC<IProps> = ({ onClick }) => {
  return (
    <button className={styles.fab} onClick={onClick}>
      +
    </button>
  )
}
