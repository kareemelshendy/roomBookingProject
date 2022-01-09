import { RequestCard } from "../../request-card/request-card"
import styles from "./finished-request.module.scss"

export const FinishedRequestComponent = () => {
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
