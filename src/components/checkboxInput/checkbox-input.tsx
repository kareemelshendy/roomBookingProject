import { Children } from "react"
import { BadgeComponent } from "../badge/badge"
import styles from "./checkbox-input.module.scss"
export const CheckBoxInput = ({ title, icon, register, name, value }: any) => {
  return (
    <>
      <div className={styles.service_group}>
        <input {...register(name)} type="checkbox" id={value} className="input" name={name} value={value} />
        <label htmlFor={value} className={`label ${styles.service_label}`}>
          <BadgeComponent bg="badge-input" title={title} icon={icon} />
        </label>
      </div>
    </>
  )
}
