import { FC } from "react"
import styles from "./TodayForecast.module.scss"
import { VerticalWeatherCard } from "../VerticalWeatherCard/VerticalWeatherCard"

interface IProps {
  todayForecast: any
}
export const TodayForecast: FC<IProps> = ({ todayForecast }) => {
  return (
    <div className={styles.todayforecast}>
      {todayForecast.map(houreForecast => {
        return <VerticalWeatherCard forecast={houreForecast} />
      })}
    </div>
  )
}
