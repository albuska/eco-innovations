"use client";

import ModalsProvider from "../../context/ModalsProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ModalsProvider>{children}</ModalsProvider>;
};
