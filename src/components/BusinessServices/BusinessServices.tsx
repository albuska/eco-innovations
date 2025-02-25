import style from "./style.module.css";

const BusinessServices = () => {
  return (
    <section className="pt-[100px] sm:pt-[115px] sm:px-[34px] sm:pb-[112px] pb-[97px] px-5 xl:pt-[87px] xl:pb-[85px] bg-business-services-mobile sm:bg-business-services-tablet lg:bg-business-services-desktop bg-center bg-cover bg-no-repeat">
      <div
        className={`${style.business_services_container_inside} bg-[var(--blue300-color)] sm:max-w-[858px] sm:mx-auto rounded-[12px] py-[44px] flex flex-col items-center gap-[32px]`}
      >
        <h2 className="w-[330px] sm:w-[360px] xl:w-[473px] font-extrabold text-[var(--white-color)] text-[28px] sm:text-[32px] leading-[34.13px] sm:leading-[39.01px] tracking-[-0.02em] xl:text-[42px] xl:leading-[51.2px] text-center mb-[13px] lg:mb-[17px] xl:mx-auto">
          Послуги для бізнесу в електроенергетиці
        </h2>
        <div className="sm:w-[638px] xl:w-[600px] flex flex-col xl:gap-5">
          <p className="text-[var(--white-color)] xl:text-xl xl:leading-[24px] text-base leading-[19.5px] text-center px-[16px] sm:px-[39px] lg:px-0">
            Ваш бізнес орієнтований на генерацію електроенергії та її продаж в
            електромережу України? <br />
          </p>
          <p className="text-[var(--white-color)] xl:text-xl xl:leading-[24px] text-base leading-[19.5px] text-center px-[16px] sm:px-[39px] lg:px-0">
            Ми допоможемо вам вийти на ринок електроенергетики легко та без
            труднощів!
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessServices;
