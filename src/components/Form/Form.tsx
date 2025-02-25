import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { schema } from "@/constants/validate";
import { IFormInputs } from "@/models";
import { Input } from "../Input";
import { Agreement } from "../Agreement";

const Form = () => {
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
      formOfOwnership: "",
      phoneNumber: "",
    },
  });

  const onSubmit = async (values: IFormInputs) => {
    try {
      console.log(values);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="flex flex-col gap-[10px] sm:gap-[23px] w-full lg:max-w-[727px] mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        control={control}
        name="formOfOwnership"
        error={errors.formOfOwnership?.message}
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
      <Input
        control={control}
        name="phoneNumber"
        error={errors.phoneNumber?.message}
        placeholder="Телефон представника підприємства"
        rules={{ required: "PhoneNumber is required" }}
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
      </div>
    </form>
  );
};

export default Form;
