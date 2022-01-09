import { RequestCard } from "../../request-card/request-card"
import styles from "./cancelled-request.module.scss"

export const CancelledRequestComponent = () => {
  return (
    <div className={styles.container}>
      <div dir="rtl">
        <RequestCard />
        <RequestCard />
        <RequestCard />
      </div>
    </div>
  )
}
