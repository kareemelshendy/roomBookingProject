import { Button } from "../button/button"
import { ProfileImage } from "../profileImage/profile-image"

import styles from "./owner-card.module.scss"
export const OwnerCard = () => {
  return (
    <>
      <div className={`${styles.request_owner} shadow_sm border-r`}>
        <h3 className="heading-4 heading-bold">مقدم الطلب</h3>
        <ProfileImage width="130px" height="130.76px" />
        <p className="heaidng-4 heading-semiBold heading-darkGrey mt-1 mb-1">حسين صابر الرفاعي </p>
        <div className={styles.button}>
          <Button btnPrimary="btn-primary" width="w-100">
            محادثة
            <i className="fas fa-comment-dots"></i>
          </Button>
        </div>
      </div>
    </>
  )
}
