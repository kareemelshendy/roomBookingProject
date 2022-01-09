import { Filter } from "../../components/filter/filter"
import { useState } from "react"
import { useForm, useFormState } from "react-hook-form"
import dayjs from "dayjs"
import styels from "./filter-hoc.module.scss"
import { useRouter } from "next/router"

type FormVlaues = {
  numberOfUsers: string
  fromDate: Date
  toDate: Date
}

export const FilterHOC = () => {
  const [show, setShow] = useState(false)
  const [markers, setMarkers] = useState<any>({})
  const router = useRouter()
  const { register, handleSubmit, control, getValues, reset } = useForm<FormVlaues>()

  function filterHandler(data: FormVlaues) {
    // console.log(data.toDate, data.fromDate)
    console.log({
      numberOfUsers: data.numberOfUsers,
      fromDate: +dayjs(data.fromDate).startOf("day"),
      toDate: +dayjs(data.toDate).endOf("day"),
    })
    // reset()

    setTimeout(() => {
      router.push("/search-results")
    }, 2000)
  }

  return (
    <div className="container">
      <div className="row">
        <div className={styels.cont}>
          <Filter register={register} handleSubmit={handleSubmit} filterHandler={filterHandler} control={control} setShow={setShow} show={show} markers={markers} setMarkers={setMarkers} />
        </div>
      </div>
    </div>
  )
}
