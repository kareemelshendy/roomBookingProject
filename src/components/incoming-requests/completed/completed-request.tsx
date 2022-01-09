import { RequestCard } from "../../request-card/request-card"
import styles from "./completed-request.module.scss"

export const CompletedRequestComponent = () => {
  return (
    <div className={styles.container}>
      <div  dir="rtl">
        <RequestCard />
        <RequestCard />
        <RequestCard />
      </div>
      
    </div>
  )
}
