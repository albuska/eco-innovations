"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { Icon } from "../Icon";
import { headerNavList } from "@/constants/globalConstants";
import logo from "../../../public/images/logo-burger.png";

interface IBurger {
  handleOpenMenu: () => void;
}

const BurgerMenu: FC<IBurger> = ({ handleOpenMenu }) => {
  const [, setIsScrolled] = useState<boolean>(false);
  const [, setActiveSection] = useState<string | null>(null);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    handleOpenMenu();
  };

  const handleActiveSection = (ref: string) => {
    setActiveSection(ref);
    handleOpenMenu();
  };

  return (
    <div className="overflow-x-hidden flex flex-col items-center absolute bg-[var(--white-color)] top-0 right-0 w-full h-screen z-20 pt-[12px] pb-[56px] sm:pb-[80px] lg:max-w-[512px] px-[30px] sm:px-[12px] lg:px-[43px]">
      <Icon
        name="icon-cross"
        width={60}
        height={60}
        onClick={handleClick}
        className="cursor-pointer ml-auto text-[var(--blue00-color)] hover:text-[var(--blue150-color)] transition-all"
      />
      <Link
        href="/"
        aria-label="Main"
        className="relative cursor-pointer w-[167px] h-[49px] sm:w-[279px] sm:h-[85px] mx-auto mt-[23px] sm:mt-0"
      >
        <Image src={logo} alt="logo" layout="fill" objectFit="contain" />
      </Link>
      <nav className="max-w-[425px]">
        <ul className="flex flex-col items-center text-center mt-[115px] sm:mt-[163px] lg:mt-[174px] gap-[30px]">
          {headerNavList.map((item) => (
            <li
              onClick={() => handleActiveSection(item.ref)}
              key={item.id}
              className="cursor-pointer relative group"
            >
              <Link
                prefetch
                href={item.ref}
                aria-label={item.name}
                className="text-[var(--blue250-color)] text-xl leading-[24px] sm:text-2xl sm:leading-[29.26px] transition-all group-hover:text-shadow-blue"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <a
        href="tel:+380988359951"
        className="cursor-pointer flex items-center gap-[10px] text-[var(--blue00-color)] text-base leading-[19.5px] font-semibold mt-auto"
      >
        <Icon name="icon-phone" width={23} height={23} />{" "}
        <span>+38 098 835 99 51</span>
      </a>
    </div>
  );
};

export default BurgerMenu;
