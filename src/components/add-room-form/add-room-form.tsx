import { useEffect, useState } from "react"
import Select from "react-select"
import { CheckBoxInput } from "../checkboxInput/checkbox-input"
import { Map } from "../map/map"
import styles from "./add-room-form.module.scss"
import { Button } from "../button/button"
import { Controller } from "react-hook-form"

interface Props {
  handleSubmit: Function
  formHandler: Function
  register: Function
  options: [
    {
      value: string
      label: string
    }
  ]
}
export const AddRoomForm = ({ handleSubmit, formHandler, register, options, control, errors, handleInput, setImagesPreview, imagesPreview, setValue, isValid, getValues, removeElement, handleImages, images, setImages }: any) => {
  return (
    <form action="" className={styles.create_form} onSubmit={handleSubmit(formHandler)}>
      <div className={styles.input_cont}>
        <div className={styles.right}>
          <div className="form-group mb-2">
            <label htmlFor="" className={styles.label}>
              {" "}
              إسم الغرفة<span>*</span>
            </label>
            <input {...register("roomName", { required: "يجب ادخال اسم الغرفة", minLength: { value: 10, message: "اقل عدد من الحروف يجب ان يكون 10 حروف" }, maxLength: { value: 60, message: "عدد الحروف يجب ان لا يتخطي ال60 حرف" } })} name="roomName" type="text" className={`form-control input ${errors.roomName ? "input_error" : "input_normal"}`} placeholder="إضف إسم الغرفة" />
            {errors.roomName && <span className={styles.error}>{errors.roomName.message}</span>}
          </div>
          <div className="form-group mb-2">
            <label htmlFor="" className={styles.label}>
              التفاصيل<span>*</span>
            </label>
            <textarea
              {...register("roomDescription", {
                required: "يحب ادخال وصف الغرفة",

                minLength: { value: 10, message: "اقل عدد من الحروف يجب ان يكون 10 حروف" },
                maxLength: { value: 300, message: "عدد الحروف يجب ان لا يتخطي ال300 حرف" },
              })}
              name="roomDescription"
              className={`form-control input ${errors.roomDescription ? "input_error" : "input_normal"}  ${styles.textarea}`}
              placeholder="أدخل التفاصيل"
            ></textarea>

            {errors.roomDescription && <span className={styles.error}>{errors.roomDescription.message}</span>}
          </div>
          <div className={`form-group mb-2 ${styles.group}`}>
            <label htmlFor="" className={styles.label}>
              سعر الليلة<span>*</span>
            </label>
            <input
              {...register("price", {
                required: "يجب إدخال سعر الغرفة",
                validate: (value: string) => {
                  return parseInt(value) > 0 || " يجب ان يكون سعر الغرفة اكبر من الصفر "
                },
              })}
              name="price"
              type="text"
              className={`form-control input ${errors.price ? "input_error" : "input_normal"}`}
              placeholder="أدخل سعر الليلة"
            />
            <p>جنية</p>
            {errors.price && <span className={styles.error}>{errors.price.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="" className={styles.label}>
              عدد الأفراد<span>*</span>
            </label>
            <Controller
              name="numberOfUsers"
              control={control}
              rules={{ required: "يجب إدخال عدد الأفراد" }}
              render={({ field, fieldState }) => {
                return (
                  <>
                    <Select instanceId="karem" isClearable {...field} menuPlacement="top" options={options} classNamePrefix={fieldState.error ? "error-select" : "number-select"} placeholder="أدخل عدد الأفراد" />
                    {fieldState.error && <span className={styles.error}>{fieldState.error.message}</span>}
                  </>
                )
              }}
            />
          </div>
        </div>

        <div className={styles.left}>
          <div className="form-group  ">
            <label htmlFor="" className={styles.label_left}>
              {" "}
              الخدمات المقدمة<span>*</span>
            </label>
            <div className={styles.services}>
              <CheckBoxInput register={register} name="services" value="roomService" title="روم سيرفس" icon="fas fa-bed" />
              <CheckBoxInput register={register} name="services" value="wifi" title="واي فاي" icon="fas fa-wifi" />
              <CheckBoxInput register={register} name="services" value="pool" title="حمام سباحه" icon="fas fa-swimming-pool" />
              <CheckBoxInput register={register} name="services" value="irConditioning" title="تكييف" icon="fas fa-snowflake" />
              <CheckBoxInput register={register} name="services" value="balcony" title="بلكونة" icon="fas fa-building" />
              <CheckBoxInput register={register} name="services" value="kitchen" title="مطبخ" icon="fas fa-utensils" />
              <CheckBoxInput register={register} name="services" value="parking" title="باركينج" icon="fas fa-car" />
            </div>
          </div>
          <div className={`form-group mb-2 ${styles.image_cont}`}>
            <div className={styles.addImage}>
              <label htmlFor="" className={styles.label_left}>
                {" "}
                أضف صور للغرفة<span>*</span>
              </label>
            </div>
            <div className={styles.images}>
              {imagesPreview.map((image: any, index: number) => {
                return (
                  <div key={index} className={styles.image_button}>
                    <img src={imagesPreview[index]} alt="" className={styles.image} />
                    <button
                      className={styles.delete}
                      type="button"
                      onClick={() => {
                        let filteredItems = removeElement(imagesPreview, index + 1)
                        console.log(filteredItems)
                        setImagesPreview(filteredItems)

                        let filteredImages = removeElement(images, index + 1)
                        console.log("filterdFiles", filteredImages)
                        setImages(filteredImages)
                      }}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                )
              })}
              {images.length < 5 && (
                <div className={styles.image_box}>
                  <button
                    type="button"
                    onClick={() => {
                      document.getElementById("images")?.click()
                    }}
                  >
                    <i className="fas fa-plus"></i>
                  </button>

                  <input
                    {...register("images", {
                      validate: {
                        isRequired: () => {
                          const { images } = getValues()
                          return images.length !== 0 || "يجب إدخال صورة"
                        },
                      },
                      max: {
                        value: 5,
                        message: "اكبر عدد من الصور 5",
                      },
                      onChange: (event: any) => {
                        handleImages(event)
                        handleInput(event)
                      },
                    })}
                    type="file"
                    name="images"
                    id="images"
                    multiple
                  />
                  {errors.images && <span className={styles.error}>{errors.images.message}</span>}
                </div>
              )}
            </div>
            {images.length > 5 && <span className={styles.maxImageNumber}>اكبر عدد من الصور 5</span>}
          </div>
          <div className="form-group">
            <label htmlFor="" className={styles.label_left}>
              {" "}
              العنوان علي الخريطة<span>*</span>
            </label>
            <div className={styles.map}>
              <Map borderRadius="border-r" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.submit_button}>
        <Button type="submit" width="w-100" btnPrimary="btn-primary" disabled={images.length > 5 ? true : false}>
          إضافة
        </Button>
      </div>
    </form>
  )
}
