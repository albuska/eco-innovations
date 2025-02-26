import { StaticImageData } from "next/image";
import { JSX } from "react";

export interface IHeaderNavList {
  id: number;
  name: string;
  value: string;
  ref: string;
}

export interface IWhyIsThisBeneficial {
  id: number;
  title: string | JSX.Element;
  text: string;
  icon: StaticImageData;
}

export interface IWhatWeProvideList {
  id: number;
  title: string;
  icon: StaticImageData;
}

export interface IOurServicesList {
  id: number;
  title: string;
  text: string;
  image: StaticImageData;
  imageTablet?: StaticImageData;
}

export interface IComprehensiveSolutionsList {
  id: number;
  title: string;
  icon: StaticImageData;
}

export interface IBenefitsOfCooperationList {
  id: number;
  text: string;
}

export interface IPermitProcessingList {
  id: number;
  title: JSX.Element | string;
  icon: string;
  widthIcon?: number;
  heightIcon?: number;
}

export interface IWhatDoWeOfferList {
  id: number;
  title?: string;
  subtitle: JSX.Element | string;
  image: StaticImageData;
}

export interface INetworkList {
  id: number;
  title?: string;
  icon: string;
  link: string;
}

export interface IContactsList {
  id: number;
  title: string;
  icon: string;
  link: string;
}

export interface INetworkListTwo {
  id: number;
  image: StaticImageData;
  link: string;
}
