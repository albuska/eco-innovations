import Image from "next/image";
import {
  analysisAndStrategyList,
  benefitsOfCooperationList,
  comprehensiveSolutionsList,
} from "@/constants/globalConstants";
import style from "./style.module.css";
import img from "../../../public/images/comprehensive_solutions_img.webp";
import chart_icon from "../../../public/images/chart_icon.webp";

const ComprehensiveSolutions = () => {
  return (
    <section className="overflow-hidden bg-[var(--blue100-color)] pt-[88px] pb-[80px] flex flex-col items-center max-w-[1440px] xl:mx-auto">
      <h2 className="font-extrabold text-[var(--black-color)] mb-[40px] text-[28px] sm:text-[32px] leading-[34.13px] lg:max-w-[600px] lg:mr-auto sm:leading-[39.01px] tracking-[-0.02em] xl:text-[42px] xl:leading-[51.2px] text-center px-[5px] sm:text-start sm:pl-[30px]">
        Комплексні рішення для вашого енергетичного бізнесу
      </h2>
      <div className="lg:flex lg:pr-[30px] lg:gap-[27px]">
        <ul className="mb-[52px] flex flex-col sm:px-[30px] lg:max-w-[558px] xl:max-w-[586px]">
          {comprehensiveSolutionsList.map((item) => (
            <li
              key={item.id}
              className={`${style.item} flex items-center gap-4 py-[14px] pl-[24px] pr-[30px] sm:pr-[48px]`}
            >
              <div className="flex items-center justify-center shrink-0 w-[64px] h-[64px] bg-[var(--white-color)] rounded-[16px]">
                <Image
                  src={item.icon}
                  alt={`Comprehensive solutions icon ${item.id}`}
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="font-bold text-xl tracking-[0.15px]">
                {item.title}
              </h3>
            </li>
          ))}
        </ul>
        <div className="relative w-[487px] h-[481px] lg:w-[399px] lg:h-[394px] xl:w-[605px] xl:h-[597px]">
          <Image
            src={img}
            alt="Comprehensive solutions image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-[10px] lg:justify-center gap-[10px] px-[28px] sm:px-[30px] xl:gap-[32px]">
        <div className="bg-[var(--white-color)] rounded-[12px] flex flex-col gap-5 p-[32px] border border-solid border-[var(--blue200-color)] lg:w-[489px] xl:w-[554px]">
          <h4 className="font-extrabold text-2xl leading-[30px] text-[var(--black-color)] xl:text-[30px] xl:leading-[30px]">
            👍 Переваги співпраці
          </h4>
          <ul className="flex flex-col gap-3 list-disc">
            {benefitsOfCooperationList.map((item) => (
              <li key={item.id}>
                <p className="font-semibold text-[17px] leading-[30px] sm:text-xl sm:leading-[30px]">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[12px] flex flex-col bg-[var(--white-color)] gap-5 p-[32px] border border-solid border-[var(--blue200-color)] lg:w-[489px] xl:w-[554px]">
          <h4 className="flex items-baseline gap-[5px] font-extrabold text-2xl leading-[30px] text-[var(--black-color)] xl:text-[30px] xl:leading-[30px]">
            <span className="relative w-[25px] height-[30px]">
              <Image src={chart_icon} alt="Chart icon" />
            </span>{" "}
            Аналіз та стратегія
          </h4>
          <ul className="flex flex-col gap-3 list-disc">
            {analysisAndStrategyList.map((item) => (
              <li key={item.id}>
                <p className="font-semibold text-[17px] leading-[30px] sm:text-xl sm:leading-[30px]">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveSolutions;
