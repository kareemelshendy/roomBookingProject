import { useRouter } from "next/router"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/thumbs"
import Layout from "../../../components/layout/layout"
import { RoomHOC } from "../../../hoc/room-hoc/room-hoc"

const RoomPage = () => {
  const router = useRouter()
  const { roomId } = router.query
  // console.log(router.query)
  return (
    <>
      <Layout title="rooms">
        <RoomHOC />
      </Layout>
    </>
  )
}

export default RoomPage
