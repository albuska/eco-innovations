"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import imgMobile from "../../../public/images/processing_permits_img_mobile.webp";
import imgTablet from "../../../public/images/processing_permits_img_tablet.webp";
import imgDesktop from "../../../public/images/processing_permits_img_desktop.webp";
import { permitProcessingList } from "@/constants/globalConstants";
import { Icon } from "../Icon";
import leaf from "../../../public/images/leaf-1.webp";
import imgTwo from "../../../public/images/processing_permits_img_2.webp";

const PermitProcessing = () => {
  const [img, setImg] = useState(imgDesktop);

  useEffect(() => {
    const updateImage = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setImg(imgMobile);
      } else if (width < 1024) {
        setImg(imgTablet);
      } else {
        setImg(imgDesktop);
      }
    };

    updateImage();
    window.addEventListener("resize", updateImage);

    return () => window.removeEventListener("resize", updateImage);
  }, []);

  return (
    <section className="sm:pb-[113px] xl:pb-[87px]">
      <div className="flex flex-col lg:flex-row gap-[40px] px-[29px] sm:px-[32px] lg:px-0 py-[80px] mx-auto max-w-[958px] xl:max-w-[1108px]">
        <div className="flex flex-col items-center gap-[24px]">
          <h2 className="font-extrabold text-[var(--black-color)] text-[28px] sm:text-[32px] leading-[34.13px] sm:leading-[39.01px] tracking-[-0.02em] xl:text-[42px] xl:leading-[51.2px]">
            Оформлення дозволів для генерації електроенергії
          </h2>
          <p className="text-[var(--black-color)] text-xl leading-[24px]">
            Ваше підприємство планує займатися генерацією електроенергії? Ми
            допоможемо вам оформити всі необхідні дозволи та ліцензії для
            законного ведення бізнесу!
          </p>
        </div>
        <div className="relative w-full md:max-w-[710px] lg:min-w-[469px] lg:w-[469px] h-[263px] mx-auto">
          <Image src={img} alt="Permit processing image" layout="fill" />
        </div>
      </div>
      <div className="relative flex flex-col lg:flex-row justify-end lg:pr-[32px] max-w-[1180px] xl:mx-auto">
        <div className="absolute left-[-6%] top-[-5%] hidden lg:block lg:w-[479px] xl:w-[535px] h-[576px] z-[2]">
          <Image src={imgTwo} alt="Permit processing image two" layout="fill" />
        </div>
        <div className="relative flex flex-col">
          <div className="z-[2] absolute top-[28%] left-[-11%] sm:left-[-6%] sm:top-[32%] w-[72px] h-[52px] scale-x-[-1] lg:hidden">
            <Image src={leaf} alt="Leaf" layout="fill" />
          </div>
          <ul className="flex flex-col gap-[10px] mx-auto z-[1]">
            {permitProcessingList.map((item) => (
              <li
                key={item.id}
                className={`${
                  item.id === 5
                    ? "bg-[var(--blue50-color)] items-start"
                    : "bg-[var(--white-color)] items-center border border-solid border-[var(--blue200-color)]"
                } pl-[30px] py-[20px] sm:pr-[37px] pr-[28px] rounded-[7px] flex gap-[20px] max-w-[639px] lg:max-w-[615px] xl:max-w-[663px]`}
              >
                <Icon
                  name={item.icon}
                  width={item.widthIcon ? item.widthIcon : 44}
                  height={item.heightIcon ? item.heightIcon : 44}
                  className="shrink-0"
                />
                <h3
                  className={`font-extrabold text-base leading-[19.5px] sm:text-lg sm:leading-[21.94px] ${
                    item.id === 5
                      ? "text-[var(--white-color)] xl:max-w-[450px]"
                      : "text-[var(--black-color)]"
                  }`}
                >
                  {item.title}
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PermitProcessing;
