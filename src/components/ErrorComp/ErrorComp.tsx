"use client";

import { FC, useEffect } from "react";
// import Image from "next/image";
import style from "./style.module.css";

interface IErrorComp {
  variant: "serverError" | "notFound";
  onClick?: () => void;
  statusCode?: number;
  errorMessage?: string;
}

const ErrorComp: FC<IErrorComp> = (
  {
    // variant,
    // onClick,
    // statusCode,
    // errorMessage,
  }
) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return <div className={style.container}></div>;
};

export default ErrorComp;
