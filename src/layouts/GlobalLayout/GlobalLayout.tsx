import { Footer } from "@/components/Footer/Footer"
import { Header } from "@/components/Header/Header"
import { Outlet } from "react-router-dom"

export const GlobalLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
