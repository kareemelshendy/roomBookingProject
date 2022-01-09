import { useFieldArray, useForm } from "react-hook-form"
import styles from "./add-room-hoc.module.scss"
import { useEffect, useState } from "react"
import { AddRoomForm } from "../../components/add-room-form/add-room-form"
import { useRouter } from "next/router"

export interface FormValues {
  numberOfUsers: string | null
  price: string
  roomDescription: string
  roomName: string
  services: string[]
  images: File[]
}
const defaultValues = {
  numberOfUsers: "",
  price: "",
  roomDescription: "",
  roomName: "",
  services: [""],
  images: [],
}

export const AddRoomHOC = () => {
  const [imagesPreview, setImagesPreview] = useState<string[]>([])
  const [images, setImages] = useState<File[]>([])
  const [disabled, setDisabled] = useState<boolean>()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
    reset,
    setValue,
    getValues,
  } = useForm<FormValues>({
    defaultValues,
    mode: "onBlur",
  })

  const options = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
  ]

  useEffect(() => {
    if (images) {
      setValue("images", images)
    }
  }, [images])

  const handleInput = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const fileArray = Array.from(event.target.files).map((file: any) => {
        return URL.createObjectURL(file)
      })
      setImagesPreview((images: any) => images.concat(fileArray))
    }
  }
  // console.log(images)
  // console.log(imagesPreview)

  const handleImages = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const filesArray = Array.from(event.target.files).map((file: any) => {
        return file
      })

      setImages((files: any) => files.concat(filesArray))
    }
  }

  const removeElement = (images: string[], i: number) => images.slice(0, i - 1).concat(images.slice(i, images.length))

  function formHandler(data: FormValues) {
    if (data.images.length < 1) {
      setDisabled(false)
    } else {
      setDisabled(true)
      console.log(data)
      reset({
        numberOfUsers: null,
        price: "",
        roomDescription: "",
        roomName: "",
        services: [""],
        images: [],
      })
    }
    setImagesPreview([])
    setImages([])
    // setTimeout(() => {
    //   router.push("/preview")
    // }, 2000)
  }

  return (
    <div className="container mt-3 mb-5 shadow_sm border-r">
      <div className="row">
        <div className={styles.create_cont} dir="rtl">
          <h2 className="heading heading-bold heading-3 mb-1">إضافة غرفة</h2>
          <p className="heading-4 heading-semiBold heading-lightGrey mb-3">أضف بيانات الغرفة المراد عرضها</p>

          <AddRoomForm formHandler={formHandler} register={register} handleSubmit={handleSubmit} options={options} control={control} errors={errors} handleInput={handleInput} imagesPreview={imagesPreview} setImagesPreview={setImagesPreview} isValid={isValid} setValue={setValue} getValues={getValues} removeElement={removeElement} handleImages={handleImages} images={images} setImages={setImages} />
        </div>
      </div>
    </div>
  )
}
