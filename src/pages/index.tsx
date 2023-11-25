import { GlobalLayout } from "@/layouts/GlobalLayout/GlobalLayout"
import { MainPage } from "@/pages/MainPage/MainPage"
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import { CityPage } from "./CityPage/CityPage"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<GlobalLayout />}>
      <Route path='/' element={<MainPage />} />
      <Route path='/city' element={<CityPage />} />
    </Route>,
  ),
)
