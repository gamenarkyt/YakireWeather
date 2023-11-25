import { FC } from "react"
import styles from "./CityCard.module.scss"
import IconClody from "@/assets/cloudy.svg?react"

interface IProps {
  degrees: number
  weatherCode: number
  city: string
}
export const CityCard: FC<IProps> = ({ degrees, weatherCode, city }) => {
  return (
    <div className={styles.citycard}>
      <div className={styles.leftside}>
        <div className={styles.weather_info_container}>
          <span className={styles.degrees}>{degrees}</span>
          <span className={styles.weather}>{weatherCode}</span>
        </div>
        <span className={styles.country}>{city}</span>
        {/* <span className={styles.time}>Time in city: {time}</span> */}
      </div>
      <div className={styles.rightside}>
        <div className={styles.weatherimage_container}>
          <IconClody />
        </div>
      </div>
    </div>
  )
}
