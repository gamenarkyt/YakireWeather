import { VerticalHoureCard } from "@/components/business/Card/VerticalHoureCard"
import styles from "./MainPage.module.scss"
import IconClody from "@/assets/cloudy.svg?react"

export const MainPage = () => {
  return (
    <div className={styles.mainpage}>
      <div className={styles.weather_preview}>
        <div className={styles.weathericon_container}>
          <IconClody />
        </div>
        <span className={styles.weather_degrees}>9`</span>
        <span className={styles.weather_county}>Moscow, Russia</span>
      </div>
      <div className={styles.weather_thisday}>
        <VerticalHoureCard
          isToday={true}
          time='12'
          weekday='wed'
          Icon={<IconClody />}
          degrees='8c'
        />
        <VerticalHoureCard
          isToday={false}
          time='12'
          weekday='wed'
          Icon={<IconClody />}
          degrees='8c'
        />
        <VerticalHoureCard
          isToday={false}
          time='12'
          weekday='wed'
          Icon={<IconClody />}
          degrees='8c'
        />
        <VerticalHoureCard
          isToday={false}
          time='12'
          weekday='wed'
          Icon={<IconClody />}
          degrees='8c'
        />
        <VerticalHoureCard
          isToday={false}
          time='12'
          weekday='wed'
          Icon={<IconClody />}
          degrees='8c'
        />
      </div>
    </div>
  )
}
