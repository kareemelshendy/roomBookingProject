import { Room } from "../../../models"

import { ReservationsGrid } from "../../reservations-grid/reservations-grid"
import styles from "./pending-reservations.module.scss"
export const PendingReservationsComponent = ({ rooms }: { rooms: Room[] }) => {
  return (
    <div className={styles.container}>
      <ReservationsGrid rooms={rooms} />
    </div>
  )
}
