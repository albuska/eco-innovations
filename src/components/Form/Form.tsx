import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import ReactGA from "react-ga4";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-input-2/lib/style.css";
import { getQuery } from "@/utils/getQuery";

import { schema } from "@/constants/validate";
import { IFormInputs } from "@/models";
import { Input } from "../Input";
import { Agreement } from "../Agreement";
import { sendEventToConversionApi } from "@/utils/sendEventsToConversionApi";
import { useModals } from "@/context/ModalsProvider";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fbq: (...args: any[]) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
  }
}

let SERVER_URL = "";
if (process.env.NODE_ENV === "production") {
  SERVER_URL = process.env.NEXT_PUBLIC_PROD_SERVER_URL!;
}
if (process.env.NODE_ENV === "development") {
  SERVER_URL = process.env.NEXT_PUBLIC_DEV_SERVER_URL!;
}

const Form = () => {
  const [serverError, setServerError] = useState<string | null>(null);
  const router = useRouter();
  const [regionCode] = useState<string>("");
  const context = useModals();

  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    control,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      ownership: "",
      phone: "",
    },
  });

  // useEffect(() => {
  //   if (context?.region) {
  //     setRegionCode(context.region.toLowerCase());
  //   } else {
  //     setRegionCode("us");
  //   }
  // }, [context?.region]);

  console.log(regionCode, "regionCode");
  console.log(context.region, "context.region");

  // useEffect(() => {
  //   context?.region
  //     ? setRegionCode(context?.region.toLowerCase())
  //     : setRegionCode("us");
  // }, [context.region]);

  const onSubmit = async (values: IFormInputs) => {
    console.log(values, "values");
    const sendData = {
      query: getQuery(),
      ...values,
    };
    setServerError(null);
    axios
      .post(SERVER_URL, sendData)
      .then(() => {
        reset();
        window.fbq("track", "Lead");
        ReactGA.event("generate_lead", {
          category: "form",
          action: "submit",
        });
        sendEventToConversionApi("Lead");
        window.gtag("event", "conversion", {
          send_to: "AW-16550313161/fs3wCMnm2dEZEMn55tM9",
        });
        router.push("/thanks");
      })
      .catch(() => {
        setServerError(
          "Сервіс тимчасово не працює. Спробуйте будь-ласка пізніше"
        );
      });
  };

  return (
    <form
      className="flex flex-col gap-[10px] sm:gap-[23px] w-full lg:max-w-[727px] mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        control={control}
        name="ownership"
        error={errors.ownership?.message}
        placeholder="Форма власності підприємства"
        rules={{ required: "Form of ownership is required" }}
      />
      <Input
        control={control}
        name="name"
        error={errors.name?.message}
        placeholder="Ім’я співробітника підприємства"
        rules={{ required: "Name is required" }}
      />
      <Controller
        name="phone"
        control={control}
        render={({ field: { onChange, value } }) => (
          <div className="relative w-full">
            <PhoneInput
              inputStyle={{
                // height: "55px",
                height: "70px",
                width: "100%",
                boxSizing: "border-box",
                borderRadius: "100px",
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: errors.phone ? "#DF2A2A" : "#fff",
                color: "#757575",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "21.94px",
                padding: "0 25px",
                backgroundColor: "#FFFFFF80",
                outline: "0",
                fontFamily: "Montserrat",
              }}
              buttonStyle={{
                boxSizing: "border-box",
                borderColor: errors.phone ? "#DF2A2A" : "#fff",
                borderWidth: "2px",
                borderStyle: "solid",
                fontFamily: "Montserrat",
                padding: "0 25px",
                // height: "55px",
                height: "70px",
              }}
              country={regionCode}
              enableSearch
              excludeCountries={["ru"]}
              value={value}
              onChange={onChange}
            />
            {errors.phone && (
              <p className="absolute text-[var(--error-color)] font-medium left-[7%] bottom-[-12px] sm:bottom-[-16px] sm:left-[7%] text-xs leading-[14.63px]">
                <span className="text-[var(--error-color)]">*</span>
                {errors.phone.message}
              </p>
            )}
            {!errors.phone && value && !isValidPhoneNumber(`+${value}`) && (
              <p className="absolute text-[var(--error-color)] left-0 bottom-[-18px] text-[12px] font-manrope">
                Invalid phone number
              </p>
            )}
          </div>
        )}
      />
      <div className="flex flex-col sm:relative gap-[10px] sm:gap-0 sm:flex-row items-center">
        <Agreement
          agreementText="Відправляючи дані, ви надаєте"
          agreementLinkSpanText="згоду на обробку персональних даних"
          agreementLink="https://e-si.energy/site/infocenter/agreement"
        />
        <button
          type="submit"
          className="flex items-center sm:absolute sm:top-[50%] sm:right-0 sm:translate-y-[-50%] justify-center w-[278px] min-w-[278px] h-[56px]  sm:h-[62px] rounded-[100px] bg-[var(--blue250-color)] text-[var(--white-color)] text-lg leading-[21.94px] font-semibold transition-all cursor-pointer hover:enabled:text-[var(--blue00-color)] hover:enabled:bg-[var(--white-color)] border-[3px] border-solid border-[transparent] hover:enabled:border-[var(--blue00-color)] disabled:bg-[var(--gray100-color)] disabled:text-[--gray300-color]"
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Отримати пропозицію"}
        </button>
        {serverError && (
          <p className="text-[var(--error-color)] font-medium mt-[10px] text-xs leading-[14.63px]">
            <span className="text-[var(--error-color)]">*</span>
            {serverError}
          </p>
        )}
      </div>
    </form>
  );
};

export default Form;
