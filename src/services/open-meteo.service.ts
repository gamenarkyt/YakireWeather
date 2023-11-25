import { ICity } from "@/types/city.interface"
import { IForecast } from "@/types/forecast.interface"
import axios from "axios"

interface ISearchCity {
  results: ICity[]
}

export const searchCity = async (name: string): Promise<ICity[]> => {
  const { data } = await axios.get<ISearchCity>(
    `https://geocoding-api.open-meteo.com/v1/search?name=${name}`,
  )
  return data.results
}

export const getCurrentWeatherForecast = async (
  latitude: number,
  longitude: number,
  timezone: string,
): Promise<IForecast> => {
  const { data } = await axios.get<IForecast>(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,weather_code,wind_speed_10m,wind_direction_10m,temperature_80m&timezone=${timezone}`,
  )
  return data
}

export const getWeatherForecast = async (
  latitude: number,
  longitude: number,
  timezone: string,
): Promise<IForecast> => {
  const { data } = await axios.get<IForecast>(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,weather_code,wind_speed_10m,wind_direction_10m,temperature_80m&timezone=${timezone}`,
  )
  return data
}
