"use client";

import Image from "next/image";
import { ourServicesList } from "@/constants/globalConstants";
import style from "./style.module.css";
import { useIsTablet } from "@/hooks";

const OurServices = () => {
    const isTablet = useIsTablet(644);
    const isDesktop = useIsTablet(1024);

  return (
    <section className="py-[80px] px-[26px] sm:px-[15px] md:px-[30px] bg-[var(--white-color)]">
      <h2 className="font-extrabold text-[var(--black-color)] text-[28px] sm:text-[32px] leading-[34.13px] sm:leading-[39.01px] tracking-[-0.02em] xl:text-[42px] xl:leading-[51.2px] text-center">
        Наші послуги
      </h2>
      <ul className="sm:max-w-[636px] lg:max-w-[960px] xl:max-w-[1140px] sm:mx-auto flex flex-col gap-[32px] sm:gap-0 md:gap-[32px] mt-[40px] sm:flex-wrap sm:gap-y-[40px] sm:justify-between md:justify-center sm:flex-row lg:flex-nowrap">
        {ourServicesList.map((item) => (
          <li
            key={item.id}
            className={`${style.item_text_box} ${
              item.id !== 2 ? "sm:w-[302px]" : "sm:w-full"
            } lg:w-1/3`}
          >
            <div className="relative w-full h-[240px]">
              <Image
                src={
                  item.imageTablet && isTablet && !isDesktop
                    ? item.imageTablet
                    : item.image
                }
                alt={`Our services image ${item.id}`}
                layout="fill"
              />
            </div>
            <div className="flex flex-col gap-[24px] p-[20px]">
              <h3 className="font-bold text-xl tracking-[0.15px] text-[var(--black-color)]">
                {item.title}
              </h3>
              <p className="text-xl leading-[24px] text-[var(--black-color)]">
                {item.text}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OurServices;
