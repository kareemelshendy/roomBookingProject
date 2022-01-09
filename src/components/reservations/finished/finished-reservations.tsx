import { Room } from "../../../models"

import { ReservationsGrid } from "../../reservations-grid/reservations-grid"
import styles from "./finished-reservations.module.scss"
export const FinishedReservationsComponent = ({ rooms }: { rooms: Room[] }) => {
  return (
    <div className={styles.container}>
      <ReservationsGrid rooms={rooms} />
    </div>
  )
}
