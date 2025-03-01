"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import imgMobile from "../../../public/images/legal_support-img_mobile.webp";
import imgTablet from "../../../public/images/legal_support-img_tablet.webp";
import imgDesktop from "../../../public/images/legal_support-img_mobile.webp";
import { legalSupportList } from "@/constants/globalConstants";

const LegalSupport = () => {
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
    <section className="relative overflow-hidden bg-[var(--white-color)] mt-[-1px]">
      <div className="max-w-[1086px] mx-auto flex flex-col items-center py-[30px] gap-[23px] sm:py-[92px] lg:py-[40px] xl:py-[80px] xl:px-0">
        <h1 className="text-3xl leading-[36.57px] sm:text-[40px] text-center text-[var(--black-color)] sm:leading-[48.76px] xl:text-[45px] xl:leading-[54.86px] font-extrabold max-w-[784px] xl:max-w-[970px] mx-auto">
          Послуги для підприємств, <br /> що генерують власну{" "}
          <span className="text-[var(--blue200-color)]">
            електроенергію завдяки сонячним електростанціям
          </span>
        </h1>
        <div className="flex flex-col items-center lg:justify-center px-[30px] lg:px-[35px] lg:flex-row gap-[24px] mt-[20px] sm:mt-[40px] lg:mt-[20px] xl:mt-[40px]">
          <ol className="flex flex-col max-w-[638px] lg:max-w-[462px]">
            {legalSupportList.map((item) => (
              <li key={item.id}>
                <p className="font-bold text-xl tracking-[0.15px]">
                  {item.title}
                </p>
              </li>
            ))}
          </ol>
          <div className="relative w-full lg:w-[469px] max-w-[638px] h-[268px] lg:h-[348px] xl:h-[268px]">
            <Image src={img} alt="Legal support" layout="fill" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalSupport;
