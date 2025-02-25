import {
  IHeaderNavList,
  IWhatWeProvideList,
  IWhyIsThisBeneficial,
  IOurServicesList,
  IComprehensiveSolutionsList,
  IBenefitsOfCooperationList,
  IPermitProcessingList,
} from "@/types";
import chart_icon from "../../public/images/chart_icon.webp";
import lightning_icon from "../../public/images/lightning_icon.webp";
import additional_profit_icon from "../../public/images/additional_profit_icon.webp";
import dandruff_icon from "../../public/images/dandruff_icon.webp";
import paper_icon from "../../public/images/paper_icon.webp";
import cup_icon from "../../public/images/cup_icon.webp";
import lawyer_icon from "../../public/images/lawyer_icon.webp";
import bag_icon from "../../public/images/bag_icon.webp";
import message_icon from "../../public/images/message_icon.webp";
import hands_icon from "../../public/images/hands_icon.webp";
import file_icon from "../../public/images/file_icon.webp";
import ourServices_img1 from "../../public/images/our_services_img.webp";
import ourServices_img2 from "../../public/images/our_services_img_2.webp";
import ourServices_img3 from "../../public/images/our_services_img_3.webp";
import ourServices_img3_tablet from "../../public/images/our_services_img_3_tablet.webp";
import flag_icon from "../../public/images/flag_icon.webp";
import { IWhatDoWeOfferList } from "@/types/types";
import check_icon from "../../public/images/check_icon.webp";
import plug_icon from "../../public/images/plug_icon.webp";
import scales_icon from "../../public/images/scales_icon.webp";

export const headerNavList: IHeaderNavList[] = [
  {
    id: 0,
    name: "Юридичне супроводження в електроенергетиці",
    value: "legalSupport",
    ref: "#legalSupport",
  },
  {
    id: 1,
    name: "Отримання статусів “Активний споживач електроенергії”/ “Виробник електроенергії”",
    value: "gettingStatuses",
    ref: "#gettingStatuses",
  },
  {
    id: 2,
    name: "Контакти",
    value: "contacts",
    ref: "#contacts",
  },
];

export const whyIsThisBeneficial: IWhyIsThisBeneficial[] = [
  {
    id: 0,
    title: "Додатковий прибуток",
    text: "продавайте надлишкову електроенергію за вигідними тарифами.",
    icon: additional_profit_icon,
  },
  {
    id: 1,
    title: "Енергонезалежність",
    text: "оптимізуйте власне споживання та отримуйте фінансову вигоду. ",
    icon: lightning_icon,
  },
  {
    id: 2,
    title: "Мінімальні ризики",
    text: "наш юридичний супровід забезпечує безпеку всіх угод.",
    icon: chart_icon,
  },
];

export const howItWorkList: IWhyIsThisBeneficial[] = [
  {
    id: 0,
    title: (
      <>
        Аналіз вашого <br /> підприємства
      </>
    ),
    text: "визначаємо потенціал генерації та можливості продажу.",
    icon: dandruff_icon,
  },
  {
    id: 1,
    title: (
      <>
        Отримання статусу <br /> &quot;Виробник електроенергії&quot;
      </>
    ),
    text: "супроводжуємо процес реєстрації.",
    icon: lightning_icon,
  },
  {
    id: 2,
    title: (
      <>
        Підготовка <br /> договорів
      </>
    ),
    text: "допомагаємо укласти вигідні угоди з енергопостачальниками.",
    icon: paper_icon,
  },
  {
    id: 3,
    title: "Підключення до ринку електроенергії",
    text: "ваш бізнес виходить на новий рівень доходу.",
    icon: cup_icon,
  },
];

export const whatWeProvideList: IWhatWeProvideList[] = [
  {
    id: 0,
    title: "Юридичну допомогу на всіх етапах продажу електроенергії",
    icon: lawyer_icon,
  },
  {
    id: 1,
    title: "Прозорість угод і вигідні тарифи без прихованих умов",
    icon: bag_icon,
  },
  {
    id: 2,
    title: "Консультації з законодавства щодо енергетичного сектора",
    icon: message_icon,
  },
  {
    id: 3,
    title: "Повний супровід для впевненого виходу на енергоринок",
    icon: hands_icon,
  },
  {
    id: 4,
    title: "Підтримку при взаємодії з операторами ринку та державними органами",
    icon: file_icon,
  },
];

export const ourServicesList: IOurServicesList[] = [
  {
    id: 0,
    title: "Пакет документів:",
    text: "Підготовка всіх необхідних дозвільних паперів та погоджень",
    image: ourServices_img1,
  },
  {
    id: 1,
    title: "Отримання ліцензії:",
    text: "Супровід на всіх етапах ліцензування для законного ведення бізнесу",
    image: ourServices_img2,
  },
  {
    id: 2,
    title: "Юридичний супровід:",
    text: "Консультації та вирішення всіх правових питань у сфері електроенергетики",
    image: ourServices_img3,
    imageTablet: ourServices_img3_tablet,
  },
];

export const comprehensiveSolutionsList: IComprehensiveSolutionsList[] = [
  {
    id: 0,
    title: "Підготовка технічної документації для запуску генерації",
    icon: paper_icon,
  },
  {
    id: 1,
    title: "Реєстрація в ринку електроенергії України",
    icon: flag_icon,
  },
  {
    id: 2,
    title: 'Отримання статусу "Виробник" електроенергії',
    icon: lightning_icon,
  },
  {
    id: 3,
    title: "Допомога з укладанням договорів на продаж електроенергії",
    icon: hands_icon,
  },
];

export const benefitsOfCooperationList: IBenefitsOfCooperationList[] = [
  {
    id: 0,
    text: "Безперешкодна робота вашої компанії",
  },
  {
    id: 1,
    text: "Отримання прибутку від продажу електроенергії",
  },
];

export const analysisAndStrategyList: IBenefitsOfCooperationList[] = [
  {
    id: 0,
    text: "Наші фахівці проаналізують ваші можливості",
  },
  {
    id: 1,
    text: "Нададуть оптимальну стратегію виходу на ринок",
  },
  {
    id: 2,
    text: "Допоможуть вам стати успішним гравцем енергоринку України",
  },
];

export const permitProcessingList: IPermitProcessingList[] = [
  {
    id: 0,
    title: "Юридичний аудит в енергетиці",
    icon: "icon-search",
    widthIcon: 35,
    heightIcon: 39,
  },
  {
    id: 1,
    title: (
      <>
        Комплексна перевірка відповідності{" "}
        <span className="font-normal">
          вашого підприємства чинним законодавчим вимогам.
        </span>
      </>
    ),
    icon: "icon-export_notes",
    widthIcon: 37,
    heightIcon: 37,
  },
  {
    id: 2,
    title: (
      <>
        Підготовка та оформлення документації <br />
        <span className="font-normal">
          для отримання дозволів на генерацію електроенергії.
        </span>
      </>
    ),
    icon: "icon-edit_document",
    widthIcon: 35,
    heightIcon: 37,
  },
  {
    id: 3,
    title:
      "Консультації з нормативних актів та стандартів ринку електроенергії.",
    icon: "icon-folder_check",
    widthIcon: 37,
    heightIcon: 29,
  },
  {
    id: 4,
    title: "Підтримка при проходженні перевірок контролюючих органів.",
    icon: "icon-task",
    widthIcon: 29,
    heightIcon: 37,
  },
  {
    id: 5,
    title: (
      <>
        Результат: <br />
        <span className="font-normal">
          Ви отримуєте юридично чисту модель ведення бізнесу, що дозволяє вам
          працювати без ризиків та штрафів.
        </span>
      </>
    ),
    icon: "icon-check",
    widthIcon: 30,
    heightIcon: 22,
  },
];

export const whatDoWeOfferList: IWhatDoWeOfferList[] = [
  {
    id: 0,
    subtitle: (
      <>
        <span className="font-extrabold">Оформлення статусу</span>{" "}
        &quot;Активний споживач&quot; – юридичний супровід процедури.
      </>
    ),
    image: paper_icon,
  },
  {
    id: 1,
    subtitle: (
      <>
        <span className="font-extrabold">
          Розробка стратегії продажу електроенергії
        </span>{" "}
        та консультації щодо тарифів.
      </>
    ),
    image: chart_icon,
  },
  {
    id: 2,
    subtitle: (
      <>
        <span className="font-extrabold">Допомога в укладенні договорів</span>{" "}
        <br /> з енергопостачальниками та трейдерами.
      </>
    ),
    image: plug_icon,
  },
  {
    id: 3,
    subtitle: (
      <>
        <span className="font-extrabold">Юридичний супровід угод</span> для
        безпечного виходу на ринок електроенергії.
      </>
    ),
    image: scales_icon,
  },
  {
    id: 4,
    subtitle: (
      <>
        <span className="font-extrabold">
          Оптимізація податкового навантаження
        </span>{" "}
        <br />
        та відповідність регуляторним вимогам.
      </>
    ),
    image: bag_icon,
  },
  {
    id: 5,
    title: "Результат",
    subtitle:
      "Ваше підприємство отримує додатковий дохід від продажу надлишкової електроенергії, працюючи законно, безпечно та ефективно!",
    image: check_icon,
  },
];
