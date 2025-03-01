import {
  IHeaderNavList,
  IWhatWeProvideList,
  IWhyIsThisBeneficial,
  IOurServicesList,
  IComprehensiveSolutionsList,
  IBenefitsOfCooperationList,
  IPermitProcessingList,
  IWhatDoWeOfferList,
  INetworkList,
  IContactsList,
  INetworkListTwo,
  ILegalSupportList,
} from "@/types";
import chart_icon from "../../public/images/chart_icon.webp";
import lightning_icon from "../../public/images/lightning_icon.webp";
import additional_profit_icon from "../../public/images/additional_profit_icon.webp";
import dandruff_icon from "../../public/images/dandruff_icon.webp";
import paper_icon from "../../public/images/paper_icon.webp";
import cup_icon from "../../public/images/cup_icon.webp";
import sun_icon from "../../public/images/sun_icon.webp";
import lawyer_icon from "../../public/images/lawyer_icon.webp";
import bag_icon from "../../public/images/bag_icon.webp";
import message_icon from "../../public/images/message_icon.webp";
import hands_icon from "../../public/images/hands_icon.webp";
import ourServices_img1 from "../../public/images/our_services_img.webp";
import ourServices_img2 from "../../public/images/our_services_img_2.webp";
import ourServices_img3 from "../../public/images/our_services_img_3.webp";
import ourServices_img3_tablet from "../../public/images/our_services_img_3_tablet.webp";
import flag_icon from "../../public/images/flag_icon.webp";
import check_icon from "../../public/images/check_icon.webp";
import scales_icon from "../../public/images/scales_icon.webp";
import whatsapp_icon from "../../public/images/whatsapp.webp";
import viber_icon from "../../public/images/viber.webp";
import telegram_icon from "../../public/images/telegram.webp";

export const headerNavList: IHeaderNavList[] = [
  {
    id: 0,
    name: "Юридичне супроводження в електроенергетиці",
    value: "legalSupport",
    ref: "#support",
  },
  {
    id: 1,
    name: "Отримання статусів “Активний споживач електроенергії”/ “Виробник електроенергії”",
    value: "gettingStatuses",
    ref: "#status",
  },
  {
    id: 2,
    name: "Контакти",
    value: "contacts",
    ref: "#contacts",
  },
];

export const legalSupportList: ILegalSupportList[] = [
  {
    id: 0,
    title: "1. “Під ключ” Підготовка повного пакету документів",
  },
  {
    id: 1,
    title: "2. Отримання всіх необхідних дозволів та ліцензій",
  },
  {
    id: 2,
    title:
      "3. Повна “упаковка” вашого підприємства щодо можливості вашого підприємства продавати електроенергію до електромережі України",
  },
  {
    id: 3,
    title: "4. Встановлення сонячних електростанцій",
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
    text: "Визначаємо потенціал генерації та можливості продажу.",
    icon: dandruff_icon,
  },
  {
    id: 1,
    title: <>Отримання дозволів для продажу електроенергії</>,
    text: "Оформлення статусів “Активний споживач” або “Виробник”",
    icon: lightning_icon,
  },
  {
    id: 2,
    title: <>Укладення договору з постачальниками</>,
    text: "Викуповуємо вашу згенеровану електроенергію",
    icon: paper_icon,
  },
  {
    id: 3,
    title: "Продаж електроенергії в мережу",
    text: "Ваш бізнес отримує дохід з продажу електроенергії",
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
    title: "Встановлення Сонячних станцій",
    icon: sun_icon,
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
    title: "Встановлення сонячних електростанцій",
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
    title: "Встановлення сонячних електростанцій",
    icon: paper_icon,
  },
  {
    id: 1,
    title: "Реєстрація в ринку електроенергії України",
    icon: flag_icon,
  },
  {
    id: 2,
    title:
      'Отримання статусу "Виробник" електроенергії або “Активний споживач електроенергії”',
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
        <span className="font-extrabold">
          Юридичний супровід <br /> угод
        </span>{" "}
        для безпечного <br /> виходу на ринок <br /> електроенергії.
      </>
    ),
    image: scales_icon,
  },
  {
    id: 3,
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
    id: 4,
    title: "Результат",
    subtitle:
      "Ваше підприємство отримує додатковий дохід від продажу надлишкової електроенергії, працюючи законно, безпечно та ефективно!",
    image: check_icon,
  },
];

export const networkList: INetworkList[] = [
  {
    id: 0,
    title: "Facebook",
    icon: "icon-facebook",
    link: "https://www.facebook.com/people/%D0%95%D0%BA%D0%BE-%D0%A1%D1%84%D0%B5%D1%80%D0%B0-%D0%9D%D0%BE%D0%B2%D0%B0%D1%86%D1%96%D0%B9/61559461587933/",
  },
  {
    id: 1,
    title: "Instagram",
    icon: "icon-instagram",
    link: "https://www.instagram.com/eco_sphere_innovations/",
  },
  {
    id: 2,
    title: "Linkedin",
    icon: "icon-linkedin",
    link: "https://www.linkedin.com/company/eco-sphere-innovations/",
  },
  {
    id: 3,
    title: "Tik tok",
    icon: "icon-tikTok",
    link: "https://www.tiktok.com/@esi_ekosferanovation",
  },
];

export const contactsList: IContactsList[] = [
  {
    id: 0,
    title: "м. Ірпінь вул. Соборна, 143",
    icon: "icon-address",
    link: "https://maps.app.goo.gl/1fgdiw6q58XbLxkV6",
  },
  {
    id: 1,
    title: "+38 098 835 99 51",
    icon: "icon-phone",
    link: "tel:+380988359951",
  },
  {
    id: 2,
    title: "info@e-si.energy",
    icon: "icon-email",
    link: "mailto:info@e-si.energy",
  },
];

export const networksListTwo: INetworkListTwo[] = [
  {
    id: 0,
    image: whatsapp_icon,
    link: "https://api.whatsapp.com/send/?phone=380988359951&text&type=phone_number&app_absent=0",
  },
  {
    id: 1,
    image: viber_icon,
    link: "viber://chat?number=380988359951",
  },
  {
    id: 2,
    image: telegram_icon,
    link: "https://t.me/+380988359951",
  },
];
