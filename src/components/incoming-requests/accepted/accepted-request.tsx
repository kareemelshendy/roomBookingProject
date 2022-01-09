import { RequestCard } from "../../request-card/request-card"

import styles from "./accepted-request.module.scss"

export const AcceptedRequestComponent = () => {
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
