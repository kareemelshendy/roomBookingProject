import Layout from "../../../../components/layout/layout"
import { IncomingRequestDetailsHOC } from "../../../../hoc/request-reservations-details-tap-hoc/request-reservations-details-hoc"


const RequestDetails = () => {
  return (
    <Layout title="التفاصيل">
      <IncomingRequestDetailsHOC />
    </Layout>
  )
}

export default RequestDetails
  