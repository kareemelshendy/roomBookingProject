import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { OTPComponent } from "../../components/otp/otp"

export const OTPHOC = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  function formHandler(data: any) {
    console.log(data)
    reset()

    router.push("/new-password")
  }
  return <OTPComponent register={register} handleSubmit={handleSubmit} errors={errors} formHandler={formHandler} />
}
