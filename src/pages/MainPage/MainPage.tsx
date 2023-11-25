import styles from "./MainPage.module.scss"

import IconClody from "@/assets/cloudy.svg?react"
import { useEffect, useState } from "react"
import { searchCity } from "@/services/open-meteo.service"
import { HorizontalDayCard } from "@/components/business/HorizontalDayCard/HorizontalDayCard"
import { TodayForecast } from "@/components/business/TodayForecast/TodayForecast"
import { IForecast } from "@/types/forecast.interface"

export const MainPage = () => {
  const forecast = useState<IForecast | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await searchCity("Lukhovitsy")
      console.log(data)
    }
    fetchData()
  }, [])

  return (
    <div className={styles.mainpage}>
      <div className={styles.weather_preview}>
        <div className={styles.weathericon_container}>
          <IconClody />
        </div>
        <span className={styles.weather_degrees}>9`</span>
        <span className={styles.weather_county}>Moscow, Russia</span>
      </div>
      {/* <TodayForecast todayForecast={forecast} /> */}

      <HorizontalDayCard />
      <HorizontalDayCard />
      <HorizontalDayCard />
      <HorizontalDayCard />
    </div>
  )
}
