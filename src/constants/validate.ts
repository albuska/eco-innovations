import * as yup from "yup";
import {
  parsePhoneNumberFromString,
  isPossiblePhoneNumber,
} from "libphonenumber-js";

const phoneNumberValidator = (value: string) => {
  if (!value) return false;

  const phoneNumber = parsePhoneNumberFromString(`+${value}`);
  return phoneNumber ? phoneNumber.isValid() : false;
};

const possiblePhoneNumberValidator = (value: string) => {
  if (!value) return false;

  return isPossiblePhoneNumber(`+${value}`);
};

export const schema = yup
  .object({
    ownership: yup.string().required("Form of ownership is required"),
    name: yup.string().required("Name is required"),
    phone: yup
      .string()
      .required("Phone number is required")
      .test("is-valid-phone", "Phone number is not valid", phoneNumberValidator)
      .test(
        "is-possible-phone",
        "Phone number is not possible",
        possiblePhoneNumberValidator
      ),
  })
  .required();
