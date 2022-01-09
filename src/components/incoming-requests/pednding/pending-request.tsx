import { RequestCard } from "../../request-card/request-card"
import styles from "./pending-request.module.scss"

export const PendingRequestComponent = () => {
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
