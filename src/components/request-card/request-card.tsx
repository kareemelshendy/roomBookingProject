import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

import styles from "./request-card.module.scss"
export const RequestCard = () => {
  const { asPath, pathname } = useRouter()
  // console.log(asPath)
  console.log(pathname)
  return (
    <Link href={`${asPath}/1/details`}>
      <a>
        <div className={`shadow_sm ${styles.card}`}>
          <div className={styles.card_image}>
            <Image src="/kids.jpg" width="152px" height="152px" objectFit="cover" />
          </div>
          <div className={styles.card_content}>
            <h3 className={`heading-bold heading-5 heading-dark ${styles.title}`}> غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك </h3>{" "}
            <p className={styles.location}>
              <i className="fas fa-map-marker-alt"></i>
              العين السخنة كمباوند أروما الكيلو 39
            </p>
            <div className={styles.card_bottom}>
              <div className={styles.card_date}>
                <p >
                  <i className="far fa-calendar"></i>
                  من تاريخ
                  <span>9 November</span>
                  الي تاريخ
                  <span>25 December </span>
                </p>
              </div>
              <p className={styles.card_price}>750 L.E</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}
