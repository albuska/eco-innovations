import Image from "next/image";
import { howItWorkList } from "@/constants/globalConstants";
import leafOne from "../../../public/images/leaf-1.webp";
import leafTwo from "../../../public/images/leaf-2.webp";
import line_tablet from "../../../public/images/line_tablet.webp";
import line_desktop from "../../../public/images/line.webp";
import { Icon } from "../Icon";

const HowItWork = () => {
  return (
    <section className="overflow-hidden relative bg-[var(--blue100-color)] py-[64px] px-[27px] sm:pt-[82px] sm:pb-[98px] lg:pb-[62px] xl:pt-[76px] xl:pb-[67px] max-w-[1225px] mx-auto">
      <Icon
        name="icon-letter_e"
        width={708}
        height={663}
        className="absolute left-[89%] sm:left-[49%] top-[-17%] lg:top-[-24%] lg:left-[50%] z-[1]"
      />
      <div className="absolute top-[7%] left-[2%] w-[126px] h-[91px] hidden lg:block">
        <Image src={leafOne} alt="Leaf" layout="fill" />
      </div>
      <div className="absolute bottom-[5%] 2xl:bottom-[1%] right-[2%] w-[61px] h-[84px] hidden xl:block z-[2]">
        <Image src={leafTwo} alt="Leaf" layout="fill" />
      </div>
      <h2 className="relative z-[2] font-extrabold text-[28px] sm:text-[32px] leading-[34.13px] sm:leading-[39.01px] tracking-[-0.02em] xl:text-[42px] xl:leading-[51.2px] text-center">
        Як це працює?
      </h2>
      <ul className="relative z-[2] flex flex-col gap-[20px] sm:flex-row sm:flex-wrap md:w-[698px] lg:w-auto sm:justify-between md:mx-auto lg:gap-0 lg:flex-nowrap mt-[40px]">
        <li className="absolute w-[65px] h-[5px] top-[16%] right-[42%] translate-x-[-50%] hidden sm:block lg:hidden">
          <Image src={line_tablet} alt="Line" layout="fill" />
        </li>
        <li className="absolute w-[65px] h-[5px] bottom-[29%] right-[42%] translate-x-[-50%] hidden sm:block lg:hidden">
          <Image src={line_tablet} alt="Line" layout="fill" />
        </li>
        {howItWorkList.map((item) => (
          <li
            key={item.id}
            className="flex flex-col items-center gap-[10px] sm:max-w-[240px]"
          >
            <div className="relative w-[50px] h-[50px] shrink-0">
              {item.id !== 3 && (
                <div className="absolute w-[65px] h-[5px] top-[50%] translate-y-[-50%] right-[-248%] hidden lg:block xl:hidden">
                  <Image src={line_desktop} alt="Line" layout="fill" />
                </div>
              )}
              {item.id !== 3 && (
                <div className="absolute w-[115px] h-[5px] top-[50%] translate-y-[-50%] right-[-358%] hidden xl:block">
                  <Image src={line_desktop} alt="Line" layout="fill" />
                </div>
              )}
              <Image
                src={item.icon}
                alt={`How it work icon ${item.id}`}
                layout="fill"
              />
            </div>
            <h3 className="relative font-bold text-xl tracking-[0.15px] text-[var(--black-color)] text-center">
              {item.title}
            </h3>
            <p className="text-base leading-[19.5px] text-[var(--black-color)] text-center">
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HowItWork;
