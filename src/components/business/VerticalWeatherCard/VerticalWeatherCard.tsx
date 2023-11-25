import { FC } from "react"
import styles from "./VerticalWeatherCard.module.scss"

interface IProps {
  forecast: any
}

export const VerticalWeatherCard: FC<IProps> = ({ forecast }) => {
  return (
    <div className={`${styles.card} ${forecast ? styles.card_today : ""} `}>
      <span>{forecast.time}</span>
      <span>{forecast.dayName}</span>
      <div className={styles.weathericon_container}>{forecast.weather}</div>
      <span>{forecast.degrees}</span>
    </div>
  )
}
