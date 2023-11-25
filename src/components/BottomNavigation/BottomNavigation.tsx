import { NavLink } from "react-router-dom"
import styles from "./BottomNavigation.module.scss"

export const BottomNavigation = () => {
  return (
    <div className={styles.bottomnavigation}>
      <NavLink to='/'>Weather</NavLink>
      <NavLink to='/city'>City</NavLink>
    </div>
  )
}
