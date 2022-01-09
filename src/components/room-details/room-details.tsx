import { Nav } from "react-bootstrap"
import { SwiperComponent } from "../swiper/swiper"
import { Map } from "../map/map"
import styles from "./room-details.module.scss"
import Link from "next/link"
import { useRouter } from "next/router"
import { BadgeComponent } from "../badge/badge"

export const RoomDetailsComponent = () => {
  const router = useRouter()
  return (
    <>
      <div className={` shadow_sm border-r ${styles.room_container}`}>
        <SwiperComponent />
        <div dir="rtl">
          <div className={styles.room_title}>
            <h2 className={`heading-3 heading-bold heading-dark `}>غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك</h2>
          </div>

          <div className={styles.room_details}>
            <h3 className="heading-bold heading-darkGrey">التفاصيل</h3>
            <p>غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك</p>
          </div>
          <div className={`mt-1 ${styles.services}`}>
            <h3 className="heading heading-bold heading-darkGrey">الخدمات المقدمة</h3>
            <div className={styles.services_content}>
              <BadgeComponent title="روم سيرفيس" bg="warning" icon="fas fa-bed" />
              <BadgeComponent title="واي فاي" bg="warning" icon="fas fa-wifi" />
              <BadgeComponent title="تكييف" bg="warning" icon="fas fa-snowflake" />
              <BadgeComponent title="مطبخ" bg="warning" icon="fas fa-utensils" />
            </div>
          </div>

          <div className={`mt-1 ${styles.location}`}>
            <h3 className="heading heading-bold heading-darkGrey">العنوان</h3>
            <div className={styles.map}>
              <Map borderRadius="border-r" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col-md-3">
          <Nav defaultActiveKey="/home" className={`border-r ${styles.list} shadow_sm`} dir="rtl">
            <Nav.Item className={`${styles.list_item} `}>
              <Link href="request-details">
                <a>تفاصيل الطلب</a>
              </Link>
            </Nav.Item>
            <Nav.Item className={`${styles.list_item} ${router.asPath === "/room-details" ? "active" : ""}`}>
              <Link href="room-details">
                <a>تفاصيل الغرفة</a>
              </Link>
            </Nav.Item>
          </Nav>
        </div> */}
    </>
  )
}
