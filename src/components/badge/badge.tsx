import { Badge } from "react-bootstrap"
import styles from "./badge.module.scss"

export const BadgeComponent = ({ title, icon = "", bg }: any) => {
  return (
    <div className={styles.services_badge}>
      {/* <Badge bg={bg}>
        <i className={icon}></i>
        {title}
      </Badge> */}

      <span className={`badge ${bg}`}>
       {icon && <i className={icon}></i>} 
        {title}
      </span>
    </div>
  )
}
