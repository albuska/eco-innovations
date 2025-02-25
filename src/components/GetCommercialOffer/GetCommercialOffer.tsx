"use client";

import dynamic from "next/dynamic";
import { FC } from "react";
import Image from "next/image";
import leafOne from "../../../public/images/leaf-1.webp";
import style from "./style.module.css";

const Form = dynamic(() => import("../Form/Form"), {
  ssr: false,
});

interface IGetCommercialOffer {
  type?: "base" | "second";
  subtitle?: string | React.ReactNode;
}

const GetCommercialOffer: FC<IGetCommercialOffer> = ({
  type = "base",
  subtitle,
}) => {
  return (
    <section
      className={`${
        type === "second"
          ? `${style.get_commercial_offer_container} bg-get-commercial-offer-mobile sm:bg-get-commercial-offer-tablet lg:bg-get-commercial-offer-desktop xl:bg-get-commercial-offer-desktop-maxi bg-center bg-no-repeat`
          : "bg-[var(--white-color)]"
      }`}
    >
      <div
        className={`relative rounded-[20px] ${
          type === "second" ? "bg-[transparent]" : "bg-[var(--blue100-color)]"
        } pt-[73px] pb-[96px] px-[27px] sm:pt-[100px] sm:pb-[118px] sm:px-[30px]`}
      >
        {type !== "second" && (
          <>
            <div className="absolute bottom-[19%] left-[-4%] xl:left-[15%] xl:bottom-[23%] w-[126px] h-[91px] hidden lg:block">
              <Image src={leafOne} alt="Leaf" layout="fill" />
            </div>
            <div className="absolute top-[9%] right-0 xl:right-[17%] xl:top-[14%] w-[131px] h-[95px] hidden lg:block scale-x-[-1]">
              <Image src={leafOne} alt="Leaf" layout="fill" />
            </div>
          </>
        )}
        <h2 className="font-extrabold text-[28px] sm:text-[32px] leading-[34.13px] sm:leading-[39.01px] tracking-[-0.02em] xl:text-[42px] xl:leading-[51.2px] text-center mb-[13px] lg:mb-[17px] xl:max-w-[600px] xl:mx-auto">
          Отримати комерційну пропозицію
        </h2>
        <p className="text-[var(--blue00-color)] font-bold text-lg sm:text-xl sm:leading-[24.38px] leading-[21.94px] text-center mb-[53px] lg:mb-[55px] xl:text-[28px] xl:leading-[34.13px] xl:mb-[36px]">
          {subtitle
            ? subtitle
            : "“Юридичний супровід у сфері електроенергетики”"}
        </p>
        <Form />
      </div>
    </section>
  );
};

export default GetCommercialOffer;
