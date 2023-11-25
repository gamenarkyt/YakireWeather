import { BottomNavigation } from "@/components/BottomNavigation/BottomNavigation"
import { Footer } from "@/components/Footer/Footer"
import { Header } from "@/components/Header/Header"
import { Outlet } from "react-router-dom"

import styles from "./GlobalLayout.module.scss"

export const GlobalLayout = () => {
  return (
    <>
      <Header />
      {/* <div className={styles.outlet}> */}
      <Outlet />
      {/* </div> */}
      <BottomNavigation />
      {/* <Footer /> */}
    </>
  )
}
