import { whatDoWeOfferList } from "@/constants/globalConstants";
import Image from "next/image";

const WhatDoWeOffer = () => {
  return (
    <section className="py-[80px]">
      <h2 className="w-[336px] sm:w-auto mx-auto font-extrabold text-[var(--black-color)] mb-[32px] text-[28px] sm:text-[32px] leading-[34.13px] sm:leading-[39.01px] tracking-[-0.02em] xl:text-[42px] xl:leading-[51.2px] text-center">
        💡 Що ми пропонуємо?
      </h2>
      <ul className="px-[28px] sm:px-[39px] lg:px-[35px] xl:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] sm:gap-[32px] mt-[32px] max-w-[1140px] mx-auto">
        {whatDoWeOfferList.map((item) => (
          <li
            key={item.id}
            className={`flex flex-col items-center gap-[20px] ${
              item.id === 5
                ? "bg-[var(--blue50-color)]"
                : "bg-[var(--blue05-color)]"
            } 
                  rounded-[12px] border border-solid border-[var(--blue200-color)] 
                  px-[13px] sm:px-[7px] lg:px-[4px] xl:px-[32px] py-[32px] text-center lg:max-w-[300px] xl:max-w-[359px]
                  `}
          >
            <div className="relative w-[70px] h-[70px] shrink-0">
              <Image
                src={item.image}
                alt={`What we provide icon ${item.id}`}
                layout="fill"
              />
            </div>
            {item.title && (
              <h3 className="font-extrabold text-[28px] leading-[30px] text-[var(--white-color)]">
                {item.title}
              </h3>
            )}
            <h4
              className={`text-xl leading-[30px] font-semibold ${
                item.id === 5
                  ? "text-[var(--white-color)]"
                  : "text-[var(--black-color)]"
              } tracking-[0.15px]`}
            >
              {item.subtitle}
            </h4>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhatDoWeOffer;
