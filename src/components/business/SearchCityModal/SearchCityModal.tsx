import { FC, MouseEvent } from "react"
import styles from "./SearchCityModal.module.scss"

interface IProps {
  closeModal: () => void
}
export const SearchCityModal: FC<IProps> = ({ closeModal }) => {
  const onModalClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
  }
  return (
    <div className={styles.container} onClick={closeModal}>
      <div className={styles.modal} onClick={event => onModalClick(event)}>
        <div className={styles.modalheader}>
          <button>x</button>
          <span>Add city</span>
          <button>+</button>
        </div>
        <input placeholder='Search' />
      </div>
    </div>
  )
}
