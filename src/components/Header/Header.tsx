"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { headerNavList } from "@/constants/globalConstants";
import { Icon } from "../Icon";
import logo from "../../../public/images/logo.png";
import { BurgerMenu } from "../BurgerMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled ? "top-0" : "top-[30px]"
      } left-0 w-full z-20 transition-all duration-300 ${
        isScrolled ? "fixed bg-[var(--black-color)]" : "absolute bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-7 xl:px-16 max-w-[1512px] mx-auto">
        <Link
          href="/"
          aria-label="Main"
          className="cursor-pointer w-[161px] h-[49px] sm:w-[279px] sm:h-[85px] relative"
        >
          <Image src={logo} alt="logo" layout="fill" objectFit="contain" />
        </Link>
        <nav className="hidden xl:flex">
          <ul className="flex gap-[70px]">
            {headerNavList.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer relative group max-w-[268px]`}
                onClick={() => setActiveSection(item.ref)}
              >
                <Link
                  prefetch
                  href={item.ref}
                  aria-label={item.name}
                  className={`text-[var(--white-color)] text-sm leading-[17.07px] font-semibold transition-all ${
                    activeSection === item.ref
                      ? "text-blue-600"
                      : "hover:text-gray-600"
                  }`}
                >
                  {item.name}
                  {/* <span
                    className={`${
                      item.ref === activeSection ? "w-full" : "w-0"
                    } block h-1 bg-[var(--blue50-color)] absolute bottom-[-2px] left-0 transition-all duration-300 group-hover:w-full`}
                  ></span> */}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Icon
          name="icon-burger"
          width={59}
          height={52}
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          className="xl:hidden cursor-pointer text-[var(--white-color)] hover:text-[var(--blue50-color)] transition-all"
        />
      </div>
      {isOpenMenu && <BurgerMenu handleOpenMenu={() => setIsOpenMenu(false)} />}
    </header>
  );
};

export default Header;
