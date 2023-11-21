import { FC } from "react"
import styles from "./VerticalHoureCard.module.scss"

interface IProps {
  time: string
  weekday: string
  Icon: any
  degrees: string
  isToday: boolean
}

export const VerticalHoureCard: FC<IProps> = ({
  time,
  weekday,
  Icon,
  degrees,
  isToday,
}) => {
  return (
    <div className={`${styles.card} ${isToday ? styles.card_today : ""} `}>
      <span>{time}</span>
      <span>{weekday}</span>
      <div className={styles.weathericon_container}>{Icon}</div>
      <span>{degrees}</span>
    </div>
  )
}
