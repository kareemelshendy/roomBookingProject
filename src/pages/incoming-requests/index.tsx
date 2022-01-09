import { GetServerSideProps } from "next"
import Layout from "../../components/layout/layout"
import { IncomingRequestHOC } from "../../hoc/incoming-requests-hoc/incoming-requests"

import { ReservationsHOC } from "../../hoc/reservations/reservations"

const IncomingRequests = () => {
  return (
    <Layout title="الطلبات الواردة">
      <IncomingRequestHOC />
    </Layout>
  )
}

export default IncomingRequests
