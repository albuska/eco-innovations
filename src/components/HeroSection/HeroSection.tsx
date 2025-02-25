import style from "./style.module.css";

const HeroSection = () => {
  return (
    <section
      className={`bg-[var(--black-color)] px-7 sm:px-10 bg-hero-mobile sm:bg-hero-tablet lg:bg-hero-desktop xl:bg-hero-desktop-maxi bg-center bg-no-repeat ${style.hero_container}`}
    >
      <h1 className="text-3xl leading-[36.57px] sm:text-[40px] text-center text-[var(--white-color)] sm:leading-[48.76px] xl:text-[45px] xl:leading-[54.86px] font-extrabold pt-[239px] pb-[239px] max-w-[740px] mx-auto">
        Послуги для підприємств, що генерують власну{" "}
        <span className="text-[var(--blue200-color)]">
          електроенергію завдяки сонячним електростанціям
        </span>
      </h1>
    </section>
  );
};

export default HeroSection;
