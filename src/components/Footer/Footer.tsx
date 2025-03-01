import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/logo-burger.webp";
import {
  contactsList,
  networkList,
  networksListTwo,
} from "@/constants/globalConstants";
import { Icon } from "../Icon";
import qrCode from "../../../public/images/qr-code.webp";

const Footer = () => {
  return (
    <footer id="contacts" className="pt-[34px] pb-[71px]">
      <div className="relative flex flex-col pl-[36px] sm:pr-[36px] sm:flex-row sm:justify-between max-w-[1050px] mx-auto xl:px-0 lg:gap-[20px]">
        <div className="flex flex-col gap-[11px] mb-[25px] sm:mb-0">
          <Link
            href="/"
            aria-label="Main"
            className="relative cursor-pointer w-[140px] h-[44px] sm:h-[41px] lg:h-[44px]"
          >
            <Image src={logo} alt="logo" layout="fill" objectFit="contain" />
          </Link>
          <p className="text-[var(--blue250-color)] text-xs leading-[14.63px] sm:text-base sm:leading-[19.5px] max-w-[230px] sm:max-w-[250px]">
            ТОВ «ЕКО-СФЕРА НОВАЦІЙ» © 2024. Усі права захищені
          </p>
        </div>
        <div className="flex flex-col gap-[20px] sm:gap-[38px] lg:flex-row lg:gap-[62px] xl:gap-[70px]">
          <div className="flex flex-col gap-[13px] sm:gap-[14px]">
            <h4 className="font-bold text-[var(--blue250-color)] text-sm leading-[17.07px]">
              Соціальні мережі
            </h4>
            <ul className="flex flex-wrap gap-x-[14px] gap-y-[12px] max-w-[256px] lg:flex-col lg:flex-nowrap">
              {networkList.map((item) => (
                <li key={item.id} className="w-[121px]">
                  <Link
                    href={item.link}
                    aria-label={item.title}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-[6px] text-[var(--blue250-color)] hover:text-[var(--gray300-color)] transition-all"
                  >
                    <Icon name={item.icon} width={19} height={19} />
                    <h5 className="text-xs leading-[14.63px] sm:text-base sm:leading-[19.5px]">
                      {item.title}
                    </h5>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold text-[var(--blue250-color)] text-sm leading-[17.07px] mb-[18px]">
              Контакти
            </h4>
            <ul className="flex flex-col gap-[14px] mb-[18px]">
              {contactsList.map((item) => (
                <li key={item.id} className="flex items-center gap-[10px]">
                  <Link
                    href={item.link}
                    aria-label={item.title}
                    className="flex items-center gap-[6px] text-[var(--blue250-color)] hover:text-[var(--gray300-color)] transition-all"
                  >
                    <Icon name={item.icon} width={17} height={17} />
                    <h5 className="text-xs leading-[14.63px] sm:text-base sm:leading-[19.5px]">
                      {item.title}
                    </h5>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex items-center gap-[27px] sm:gap-[20px]">
              {networksListTwo.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    aria-label="Network call"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-[6px] text-[var(--blue250-color)] hover:text-[var(--blue00-color)] transition-all"
                  >
                    <Image
                      src={item.image}
                      alt="Network image"
                      width={31}
                      height={31}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute bottom-[-4%] left-[55%] sm:left-[2%] w-[156px] h-[203px] lg:relative lg:shrink-0 lg:mt-[-2%]">
            <Image src={qrCode} alt="QR code" layout="fill" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
