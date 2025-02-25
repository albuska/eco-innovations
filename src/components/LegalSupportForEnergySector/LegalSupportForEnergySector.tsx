import style from "./style.module.css";

const LegalSupportForEnergySector = () => {
  return (
    <section
      className={`${style.legal_support_for_energy_sector_container} pt-[15px] pb-[12px] sm:pt-[105px] sm:pb-[103px] lg:pt-[115px] lg:pb-[113px] px-[29px] sm:px-0 xl:pt-[93px] xl:pb-[91px] bg-legal-support-for-energy-sector-mobile sm:bg-legal-support-for-energy-sector-tablet lg:bg-legal-support-for-energy-sector-desktop xl:bg-legal-support-for-energy-sector-desktop-maxi bg-center bg-cover bg-no-repeat`}
    >
      <div
        className={`${style.container_inside} flex flex-col items-center gap-[32px] p-11 rounded-[12px] max-w-[636px] lg:max-w-[858px] mx-auto`}
      >
        <h2 className="font-extrabold text-[var(--white-color)] text-center text-[28px] sm:text-[32px] leading-[34.13px] sm:leading-[39.01px] tracking-[-0.02em] xl:text-[42px] xl:leading-[51.2px]">
          Юридичний супровід енергетики: надання статусу &quot;Активний
          споживач&quot;
        </h2>
        <p className="font-base leading-[19.5px] text-center text-[var(--white-color)] xl:text-xl xl:leading-[24px]">
          Якщо ваше підприємство генерує електроенергію для власних потреб, але
          має надлишки, ви можете продавати їх на ринок України!
        </p>
      </div>
    </section>
  );
};

export default LegalSupportForEnergySector;
