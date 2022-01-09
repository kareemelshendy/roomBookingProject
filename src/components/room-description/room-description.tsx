import Image from "next/image"
import { useRouter } from "next/router"
import { BadgeComponent } from "../badge/badge"
import { Button } from "../button/button"

import { Map } from "../map/map"

import styles from "./room-description.module.scss"

export const RoomDescription = ({ buttons }: any) => {
  const router = useRouter()
  const { roomid } = router.query

  return (
    <>
      <div className={styles.roomTop}>
        <h2 className="heading heading-bold heading-3">غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك</h2>
        <div className={styles.titleContent}>
          <div className={styles.priceAndUser}>
            <div className={` ${styles.price}`}>
              <p>400 L.E</p>
            </div>
            <div className={`${styles.users}`}>
              <i className="fas fa-user"></i>
              <p>4</p>
            </div>
          </div>

          {buttons && (
            <div className={styles.buttons}>
              <div className={styles.favButton}>
                <Button btnBorderDarkGrey="btn-border-darkGrey " width="w-100">
                  <i className={`fas fa-heart ms-6`}></i>
                  المفضلة
                </Button>
              </div>

              <div className={styles.bookButton}>
                <Button
                  onClick={() => {
                    router.push(`/rooms/${roomid}/book`)
                  }}
                  btnPrimary="btn-primary"
                  width="w-100"
                >
                  أحجز
                </Button>
              </div>

              {/* <button className="btn btn-primary w-100 border-r  ">احجز</button> */}
            </div>
          )}
        </div>
      </div>
      <div className={` mt-1 ${styles.details}`}>
        <h3 className="heading heading-bold heading-darkGrey">التفاصيل</h3>
        <p>غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك</p>
      </div>

      <div className={`mt-1 ${styles.services}`}>
        <h3 className="heading heading-bold heading-darkGrey">الخدمات المقدمة</h3>
        <div className={styles.services_content}>
          <BadgeComponent title="روم سيرفيس" bg="bg-warning" icon="fas fa-bed" />
          <BadgeComponent title="واي فاي" bg="bg-warning" icon="fas fa-wifi" />
          <BadgeComponent title="تكييف" bg="bg-warning" icon="fas fa-snowflake" />
          <BadgeComponent title="مطبخ" bg="bg-warning" icon="fas fa-utensils" />
        </div>
      </div>

      <div className={`mt-1 ${styles.location}`}>
        <h3 className="heading heading-bold heading-darkGrey">العنوان</h3>
        <div className={styles.map}>
          <Map borderRadius="border-r" />
        </div>
      </div>
    </>
  )
}
