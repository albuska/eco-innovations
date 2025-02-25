"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import imgMobile from "../../../public/images/legal_support-img_mobile.webp";
import imgTablet from "../../../public/images/legal_support-img_tablet.webp";
import imgDesktop from "../../../public/images/legal_support-img_mobile.webp";

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
    <section className="bg-[var(--white-color)] mt-[-1px]">
      <div className="max-w-[1086px] mx-auto flex flex-col lg:flex-row items-center gap-[23px] p-[30px] sm:py-[92px] lg:px-[35px] lg:py-[40px] xl:py-[80px] xl:px-0">
        <div className="flex flex-col gap-[24px]">
          <h2 className="max-w-[530px] lg:max-w-[470px] font-extrabold text-[28px] sm:text-[32px] leading-[34.13px] sm:leading-[39.01px] tracking-[-0.02em]">
            Юридична допомога <br /> у продажу електроенергії для підприємств
          </h2>
          <p className="font-normal text-xl leading-[24px]">
            Якщо ваше підприємство генерує електроенергію та має надлишки, саме
            час перетворити їх на стабільний дохід!
          </p>
        </div>
        <div className="relative w-full max-w-[469px] h-[268px]">
          <Image src={img} alt="Legal support" layout="fill" />
        </div>
      </div>
    </section>
  );
};

export default LegalSupport;
