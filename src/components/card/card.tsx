import styles from "./card.module.scss"
import Image from "next/image"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"
export const Card = ({ room, handleFav }: any) => {
  const [fav, setfav] = useState(false)
  const router = useRouter()
  return (
    <div className={`card ${styles.card} shadow_sm `}>
      <button
        className={fav ? `${styles.heart} ${styles.heart_fav} ` : styles.heart}
        onClick={() => {
          // handleFav(room)
          setfav(!fav)
        }}
      >
        <i className="fas fa-heart"></i>
      </button>
      {/* <FontAwesomeIcon icon={faKissWinkHeart} /> */}
      <Image src={room.image} className={`card-img-top ${styles.card_img}`} width="274px" height="169px" alt="" />

      <div className={`card-body ${styles.card_body}`}>
        <h4 className={`heading-5 heading-bold heading-dark ${styles.title}`}>
          <Link href={router.asPath === "/reservations" ? `/reservations/${room.id}/details` : `/rooms/${room.id}`}>
            <a className={`heading-dark  `}>{room.roomtitle}</a>
          </Link>
        </h4>
        <div className={`shadow_sm ${styles.price}`}>
          <h5>{room.price} L.E</h5>
        </div>
        <div className={`shadow_sm ${styles.users}`}>
          <h5>{room.numberOfUsers}</h5>
          <i className="fas fa-user"></i>
        </div>

        <div className={styles.location}>
          <p className={`card-text ${styles.card_text}`}>{room.location}</p>

          <i className="fas fa-map-marker-alt"></i>
        </div>
      </div>
    </div>
  )
}
