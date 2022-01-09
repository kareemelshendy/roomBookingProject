import { Room } from "../../../models"
import { ReservationsGrid } from "../../reservations-grid/reservations-grid"

import styles from "./accepted-reservations.module.scss"
export const AcceptedReservationsComponent = ({ rooms }: { rooms: Room[] }) => {
  return (
    <div className={styles.container}>
      <ReservationsGrid rooms={rooms} />
    </div>
  )
}
