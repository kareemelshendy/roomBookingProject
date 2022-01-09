import Layout from "../../components/layout/layout"
import { EditProfileTabHOC } from "../../hoc/profile-edit-tab-hoc/profile-edit-tab-hoc"

const EditInformation = () => {
  return (
    <Layout title="تعديل الصفحة الشخصية">
      <EditProfileTabHOC />
    </Layout>
  )
}

export default EditInformation
