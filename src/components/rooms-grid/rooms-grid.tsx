import { Room } from "../../models"
import { Card } from "../card/card"

export const RoomsGrid = ({ rooms, handleFav }: any) => {
  return (
    <>
      {rooms.map((room: Room) => {
        return (
          <div className="col-md-6 col-lg-3 mb-2" dir="ltr" key={room.id}>
            <Card room={room} handleFav={handleFav} />
          </div>
        )
      })}
    </>
  )
}
