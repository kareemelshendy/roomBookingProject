import { useState } from "react"
import { Tab, Tabs } from "react-bootstrap"
import { OwnerCard } from "../../components/owner-card/owner-card"
import { RequestDetailsHOC } from "../request-details-hoc/request-details-hoc"
import { RoomDetailsHOC } from "../room-details-hoc/room-details-hoc"

export const IncomingRequestDetailsHOC = () => {
  const [key, setKey] = useState("request-details")
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="request__tap-container">
              <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k: any) => setKey(k)} className="requestTab shadow_sm">
                <Tab eventKey="request-details" title="تفاصيل الطلب">
                  <RequestDetailsHOC />
                </Tab>
                <Tab eventKey="room-details" title="تفاصيل الغرف">
                  <RoomDetailsHOC />
                </Tab>
              </Tabs>
              <div className="owner_card">
                <OwnerCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
