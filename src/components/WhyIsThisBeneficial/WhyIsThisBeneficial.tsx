import Image from "next/image";
import { whyIsThisBeneficial } from "@/constants/globalConstants";
import style from "./style.module.css";
import img from "../../../public/images/legal_support-img_2.webp";

const WhyIsThisBeneficial = () => {
  return (
    <section className="pt-[50px] pb-[30px] sm:pb-[72px] lg:py-[50px] xl:py-[88px]">
      <div className="flex flex-col lg:gap-[23px] lg:flex-row-reverse lg:justify-center items-center">
        <div className="mb-[72px] sm:mb-0 lg:max-w-[490px]">
          <h2 className="font-extrabold text-[28px] sm:text-[32px] leading-[34.13px] sm:leading-[39.01px] tracking-[-0.02em] xl:text-[42px] xl:leading-[51.2px] text-center lg:text-start">
            🚀 Чому це вигідно?
          </h2>
          <ul className="flex flex-col gap-6 mt-[40px] mb-[20px]">
            {whyIsThisBeneficial.map((item) => (
              <li
                key={item.id}
                className={`flex items-center gap-[29px] py-4 px-6 ${style.item}`}
              >
                <div className="relative w-[48px] h-[48px] shrink-0">
                  <Image
                    src={item.icon}
                    alt={`Why is this beneficial image ${item.id}`}
                    layout="fill"
                  />
                </div>
                <div className="flex flex-col gap-[4px]">
                  <h3 className="font-bold text-xl tracking-[0.15px] text-[var(--black-color)]">
                    {item.title}
                  </h3>
                  <p className="text-base leading-[19.5px] text-[var(--gray300-color)]">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative w-[300px] h-[303px] sm:w-[480px] sm:h-[473px] lg:w-[470px] xl:w-[626px] xl:h-[602px]">
          <Image src={img} alt="Why is this beneficial" layout="fill" />
        </div>
      </div>
    </section>
  );
};

export default WhyIsThisBeneficial;
