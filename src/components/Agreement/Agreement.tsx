import { FC } from "react";

interface IAgreement {
  agreementText: string;
  agreementLinkSpanText: string | undefined;
  agreementLink?: string;
}
const Agreement: FC<IAgreement> = ({
  agreementText,
  agreementLinkSpanText,
  agreementLink,
}) => {
  return (
    <div
      className="w-full rounded-[100px] h-[55px] sm:h-[64px] 
              pt-[10px] pb-[18px] lg:pt-[9px] lg:pb-[25px] px-[20px] lg:px-[45px] 
              border-solid border-[1px] bg-[var(--gray00-color)] border-[var(--white-color)]"
    >
      <p className="text-[var(--black-color)] font-normal text-xs leading-[14.63px] sm:text-base sm:leading-[19.5px] sm:w-[309px] lg:text-lg lg:leading-[21.94px] lg:w-[396px]">
        {agreementText}{" "}
        <span className="custom_underline text-[var(--blue150-color)]">
          <a href={agreementLink} target="_blank" rel="noreferrer">
            {agreementLinkSpanText}
          </a>
        </span>
      </p>
    </div>
  );
};
export default Agreement;
