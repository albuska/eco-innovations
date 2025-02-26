import { FC, useState } from "react";
import { Controller } from "react-hook-form";
import { Icon } from "../Icon";

interface IInput {
  name: string;
  error?: string;
  rules?: object;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  placeholder?: string;
}

const Input: FC<IInput> = ({
  name,
  error,
  rules = {},
  control,
  placeholder,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <div className="w-full relative">
          <input
            className={`outline-none placeholder:font-montserrat ${
              placeholder === "Телефон представника підприємства"
                ? "pt-0 xsm:pt-[18px] sm:pt-[25px]"
                : "pt-0 xs:pt-[18px]"
            } w-full rounded-[100px] h-[55px] sm:h-[70px] 
              pb-[18px] sm:py-[25px] px-[20px] sm:px-[45px] text-base leading-[19.5px] text-[var(--gray300-color)] sm:text-lg sm:leading-[21.94px]
              border-solid border-[2px] bg-[var(--gray00-color)] placeholder:whitespace-normal placeholder:break-words
              ${
                error
                  ? "border-[var(--error-color)]"
                  : isFocused
                  ? "border-[var(--blue150-color)]"
                  : "border-[var(--white-color)]"
              }`}
            {...field}
            placeholder={placeholder}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          {error && (
            <div className="absolute top-[50%] translate-y-[-50%] right-[2%] sm:right-[5%] lg:right-[3%]">
              <Icon
                name="icon-error-circle"
                className="absolute right-3 top-1/2 -translate-y-1/2"
                width={30}
                height={30}
              />
            </div>
          )}

          {!error && field.value && (
            <div className="absolute top-[50%] translate-y-[-50%] right-[2%] sm:right-[5%] lg:right-[3%]">
              <Icon
                name="icon-check_circle"
                className="absolute right-3 top-1/2 -translate-y-1/2"
                width={30}
                height={30}
              />
            </div>
          )}
          {error && (
            <p className="absolute text-[var(--error-color)] font-medium left-[7%] bottom-[-12px] sm:bottom-[-16px] sm:left-[7%] text-xs leading-[14.63px]">
              <span className="text-[var(--error-color)]">*</span>
              {error}
            </p>
          )}
        </div>
      )}
    />
  );
};

export default Input;
