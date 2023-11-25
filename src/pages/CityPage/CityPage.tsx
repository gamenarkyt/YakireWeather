import { useLocalStorage } from "@uidotdev/usehooks"
import styles from "./CityPage.module.scss"
import { ICity } from "@/types/city.interface"
import { CityCard } from "@/components/business/CityCard/CityCard"
import { useEffect, useState } from "react"
import { getCurrentWeatherForecast } from "@/services/open-meteo.service"
import { FAB } from "@/components/ui/FAB/FAB"
import { SearchCityModal } from "@/components/business/SearchCityModal/SearchCityModal"

const initialCity: ICity[] = [
  {
    id: 2643743,
    name: "London",
    latitude: 51.50853,
    longitude: -0.12574,
    elevation: 25,
    timezone: "Europe/London",
    country: "United Kingdom",
  },
]

interface ICity2 {
  degrees: number
  weatherCode: number
  city: string
}

export const CityPage = () => {
  const [isModal, setIsModal] = useState(false)
  const [cities, setCities] = useLocalStorage<ICity[]>("cities", initialCity)

  const changeModalState = () => {
    setIsModal(prev => !prev)
  }

  return (
    <div className={styles.citypage}>
      <FAB onClick={changeModalState} />
      {isModal && <SearchCityModal closeModal={changeModalState} />}
    </div>
  )
}
