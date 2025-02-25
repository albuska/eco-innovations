import { whatWeProvideList } from "@/constants/globalConstants";
import Image from "next/image";

const WhatWeProvide = () => {
  return (
    <section className="py-[80px] px-[26px] sm:py-[61px] sm:px-[28px] lg:py-[91px] lg:px-[38px] xl:px-0 max-w-[1140px] mx-auto">
      <h2 className="font-extrabold text-[28px] sm:text-[32px] leading-[34.13px] sm:leading-[39.01px] tracking-[-0.02em] xl:text-[42px] xl:leading-[51.2px] text-center">
         Що ми забезпечуємо?
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-[24px] mt-[32px]">
        {whatWeProvideList.map((item, index) => (
          <li
            key={item.id}
            className={`flex flex-col items-center gap-[20px] bg-[var(--blue05-color)] 
                  rounded-[12px] border border-solid border-[var(--blue200-color)] 
                  px-[21px] py-[32px] text-center
                  
                  ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"}  
                  ${index < 2 ? "sm:col-span-1" : ""} 
                  ${index >= 2 && index < 4 ? "sm:col-span-1" : ""}  
                  ${index === 4 ? "sm:col-span-2" : ""}  
                  ${index >= 3 ? "lg:col-span-3" : ""}`}
          >
            <div className="relative w-[70px] h-[70px] shrink-0">
              <Image
                src={item.icon}
                alt={`What we provide icon ${item.id}`}
                layout="fill"
              />
            </div>
            <h3 className="font-bold text-xl tracking-[0.15px]">
              {item.title}
            </h3>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhatWeProvide;
