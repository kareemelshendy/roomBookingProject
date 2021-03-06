import Link from "next/link"
import { Map } from "../../components/map/map"
import { Nav } from "react-bootstrap"
import { SwiperComponent } from "../../components/swiper/swiper"
import styles from "./room-details-hoc.module.scss"
import { useRouter } from "next/router"
import { RoomDetailsComponent } from "../../components/room-details/room-details"

export const RoomDetailsHOC = () => {
  const router = useRouter()
  return <RoomDetailsComponent />
}
