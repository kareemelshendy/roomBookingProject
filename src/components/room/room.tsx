import styles from "./room.module.scss"

import { Button } from "../button/button"
import { ProfileImage } from "../profileImage/profile-image"
import { SwiperComponent } from "../swiper/swiper"
import { RoomDescription } from "../room-description/room-description"
import { OwnerCard } from "../owner-card/owner-card"

// install Swiper modules
// SwiperCore.use()

export const Room = () => {
  return (
    <>
      <section>
        <div className="container mt-3 mb-3">
          <div className="row">
            <div className="col">
              <SwiperComponent />
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-3 mb-3">
        <div className="row">
          <div className="col-lg-9 ">
            <div className={` shadow_sm ${styles.room}`} dir="rtl">
              <RoomDescription buttons={true} />
            </div>
          </div>
          <div className="col-lg-3 ">
            <OwnerCard />
          </div>
        </div>
      </div>
    </>
  )
}
