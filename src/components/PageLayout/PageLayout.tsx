"use client";

import Head from "next/head";
import { FC, useEffect } from "react";
import { useModals } from "../../../../lt-land-usa/src/context/ModalsProvider";
import {
  getLocationData,
  sendEventToConversionApi,
} from "@/utils/sendEventsToConversionApi";

interface IPageLayout {
  children: React.ReactNode;
}

const PageLayout: FC<IPageLayout> = ({ children }) => {
  const context = useModals();

  useEffect(() => {
    sendEventToConversionApi("PageView");
  }, []);

  useEffect(() => {
    getLocationData().then((data) => {
      console.log(data, "data");
      context.setRegionName(data.region);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Eco Innovations</title>
        <meta name="description" content="Eco Innovations" />
        <meta property="og:title" content="Eco Innovations" />
        <meta property="og:description" content="Eco Innovations" />
        <meta property="og:type" content="" />
        <meta property="og:url" content="https://smart.e-si.energy/" />
        <meta property="og:image" content="" />
      </Head>

      <main>{children}</main>
    </>
  );
};

export default PageLayout;
