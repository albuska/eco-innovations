import * as yup from "yup";

export const schema = yup
  .object({
    formOfOwnership: yup.string().required("Form of ownership is required"),
    name: yup.string().required("Name is required"),
    phoneNumber: yup.string().required("Phone number is required"),
  })
  .required();
