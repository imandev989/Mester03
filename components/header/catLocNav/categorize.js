import { IoIosCloudOutline } from "react-icons/io";
import { BiCategoryAlt } from "react-icons/bi";
import { PiSoccerBall, PiBasket } from "react-icons/pi";
import { IoRestaurantOutline, IoStorefrontOutline } from "react-icons/io5";
import { FaTheaterMasks } from "react-icons/fa";
import { BsHeartPulse } from "react-icons/bs";
import { MdCleaningServices } from "react-icons/md";
import { GiAirplaneDeparture, GiTeacher } from "react-icons/gi";
import { RiCoupon3Line } from "react-icons/ri";

export const menuItems = [
  {
    name: "categorizes",
    label: "دسته بندی ها",
    icon: <BiCategoryAlt className="text-xl " />,
    url: "",
    subItems: [
      {
        name: "sportEntertainment",
        label: "تفریح و ورزش",
        icon: <PiSoccerBall className="text-xl text-gray-500" />,
        url: "/en/mashhad/category/sportEntertainment",
        subItems: [
          {
            name: "all",
            label: "همه",
            url: "/en/mashhad/category/sportEntertainment",
          },
          {
            name: "poll",
            label: "استخر",
            url: "/en/mashhad/category/sportEntertainment/poll",
          },
          {
            name: "amusementPark",
            label: "شهربازی",
            url: "/en/mashhad/category/sportEntertainment/amusementPark",
          },
          {
            name: "escapeRoom",
            label: "اتاق فرار",
            url: "/en/mashhad/category/sportEntertainment/escapeRoom",
          },
          {
            name: "groupGames",
            label: "بازی های گروهی",
            url: "/en/mashhad/category/sportEntertainment/groupGames",
          },
          {
            name: "aerobicSports",
            label: "ورزش های هوازی",
            url: "/en/mashhad/category/sportEntertainment/aerobicSports",
          },
          {
            name: "sportClubs",
            label: "باشگاه های ورزشی",
            url: "/en/mashhad/category/sportEntertainment/sportClubs",
          },
        ],
      },
      {
        name: "restaurantCafe",
        label: "رستوران و کافه",
        icon: <IoRestaurantOutline className="text-xl text-gray-500" />,
        url: "/en/mashhad/category/restaurantCafe",
        subItems: [
          {
            name: "all",
            label: "همه",
            url: "/en/mashhad/category/restaurantCafe",
          },
          {
            name: "iranianFood",
            label: "غذای ایرانی و سنتی",
            url: "/en/mashhad/category/restaurantCafe/iranianFood",
          },
          {
            name: "foreignFood",
            label: "غذای خارجی",
            url: "/en/mashhad/category/restaurantCafe/foreignFood",
          },
          {
            name: "fastFood",
            label: "فست فود",
            url: "/en/mashhad/category/restaurantCafe/fastFood",
          },
          {
            name: "kitchen",
            label: "سفره خانه",
            url: "/en/mashhad/category/restaurantCafe/kitchen",
          },
          {
            name: "selfService",
            label: "بوفه و سلف سرویس ",
            url: "/en/mashhad/category/restaurantCafe/selfService",
          },
          {
            name: "cafeShop",
            label: "کافی شاپ",
            url: "/en/mashhad/category/restaurantCafe/cafeShop",
          },
          {
            name: "breakfast",
            label: "صبحانه",
            url: "/en/mashhad/category/restaurantCafe/breakfast",
          },
          {
            name: "catering",
            label: "کترینگ",
            url: "/en/mashhad/category/restaurantCafe/catering",
          },
        ],
      },
      {
        name: "TheaterArt",
        label: "تئاتر و هنر",
        icon: <FaTheaterMasks className="text-xl text-gray-500" />,
        url: "/en/mashhad/category/TheaterArt",
        subItems: [
          {
            name: "all",
            label: "همه",
            url: "/en/mashhad/category/TheaterArt",
          },
          {
            name: "theater",
            label: "تئاتر",
            url: "/en/mashhad/category/TheaterArt/theater",
          },
          {
            name: "concert",
            label: "کنسرت",
            url: "/en/mashhad/category/TheaterArt/theater/concert",
          },
          {
            name: "cinema",
            label: "سینما",
            url: "/en/mashhad/category/TheaterArt/theater/cinema",
          },
          {
            name: "childernTheater",
            label: "تئاتر کودک و نوجوان",
            url: "/en/mashhad/category/TheaterArt/theater/childernTheater",
          },
          {
            name: "showCulture",
            label: "نمایش و فرهنگی",
            url: "/en/mashhad/category/TheaterArt/theater/showCulture",
          },
          {
            name: "atelier",
            label: "آتلیه و خدمات چاپ",
            url: "/en/mashhad/category/TheaterArt/theater/atelier",
          },
        ],
      },

      {
        name: "medicalHealth",
        label: "پزشکی و سلامت ",
        icon: <BsHeartPulse className="text-xl text-gray-500" />,
        url: "/en/mashhad/category/medicalHealth",
        subItems: [
          {
            name: "all",
            label: "همه",
            url: "/en/mashhad/category/medicalHealth",
          },
          {
            name: "laser",
            label: "لیزر موهای زائد",
            url: "/en/mashhad/category/medicalHealth/laser",
          },
          {
            name: "botox",
            label: "ژل و بوتاکس",
            url: "/en/mashhad/category/medicalHealth/botox",
          },
          {
            name: "fitness",
            label: "خدمات تناسب اندام و لاغری",
            url: "/en/mashhad/category/medicalHealth/fitness",
          },
          {
            name: "massage",
            label: "ماساژ",
            url: "/en/mashhad/category/medicalHealth/massage",
          },
          {
            name: "skinBeauty",
            label: "پوست و زیبایی",
            url: "/en/mashhad/category/medicalHealth/skinBeauty",
          },
          {
            name: "dental",
            label: "خدمات دندانپزشکی",
            url: "/en/mashhad/category/medicalHealth/dental",
          },
          {
            name: "rejuvenationSlimming",
            label: "جوانسازی و اسلیمینگ",
            url: "/en/mashhad/category/medicalHealth/rejuvenationSlimming",
          },
          {
            name: "counseling",
            label: "مراکز مشاوره",
            url: "/en/mashhad/category/medicalHealth/counseling",
          },
        ],
      },
      {
        name: "learning",
        label: "آموزشی",
        icon: <GiTeacher className="text-xl text-gray-500" />,
        url: "/en/mashhad/category/learning",
        subItems: [
          {
            name: "all",
            label: "همه",
            url: "/en/mashhad/category/learning",
          },
          {
            name: "computer",
            label: "کامپیوتر",
            url: "/en/mashhad/category/learning/computer",
          },
          {
            name: "music",
            label: "موسیقی",
            url: "/en/mashhad/category/learning/music",
          },
          {
            name: "cooking",
            label: "آشپزی",
            url: "/en/mashhad/category/learning/cooking",
          },
          {
            name: "forigenLanguage",
            label: "زبان های خارجی",
            url: "/en/mashhad/category/learning/forigenLanguage",
          },
          {
            name: "conference",
            label: "گردهمایی و همایش",
            url: "/en/mashhad/category/learning/conference",
          },
          {
            name: "accounting",
            label: "حسابداری ",
            url: "/en/mashhad/category/learning/accounting",
          },
          {
            name: "personalSkills",
            label: "مهارت های فردی",
            url: "/en/mashhad/category/learning/personalSkills",
          },
          {
            name: "onlineLearning",
            label: "آموزش های آنلاین",
            url: "/en/mashhad/category/learning/onlineLearning",
          },
          {
            name: "makeUpLearning",
            label: "آموزش آرایشگری و میکاپ",
            url: "/en/mashhad/category/learning/makeUpLearning",
          },
          {
            name: "businessSkills",
            label: "مهارت کسب و کار",
            url: "/en/mashhad/category/learning/businessSkills",
          },
        ],
      },

      {
        name: "beautyMakeUp",
        label: "زیبایی و آرایشگری",
        icon: <IoIosCloudOutline className="text-xl text-gray-500" />,
        url: "/en/mashhad/category/beautyMakeUp",
        subItems: [
          {
            name: "all",
            label: "همه",
            url: "/en/mashhad/category/beautyMakeUp",
          },
          {
            name: "nail",
            label: "خدمات ناخن",
            url: "/en/mashhad/category/beautyMakeUp/nail",
          },
          {
            name: "skin",
            label: "خدمات پوست ",
            url: "/en/mashhad/category/beautyMakeUp/skin",
          },
          {
            name: "waxing",
            label: "اپلاسیون",
            url: "/en/mashhad/category/beautyMakeUp/waxing",
          },
          {
            name: "hairSalons",
            label: "آرایشگاه زنانه ",
            url: "/en/mashhad/category/beautyMakeUp/hairSalons",
          },
          {
            name: "eyebrowsEyelashes",
            label: "خدمات ابرو و مژه",
            url: "/en/mashhad/category/beautyMakeUp/eyebrowsEyelashes",
          },
          {
            name: "bridalCenters",
            label: "مراکز تخصصی عروس ",
            url: "/en/mashhad/category/beautyMakeUp/bridalCenters",
          },
        ],
      },
      {
        name: "travelTours",
        label: "تورهای مسافرتی",
        icon: <GiAirplaneDeparture className="text-xl text-gray-500" />,
        url: "/en/mashhad/category/travelTours",
        subItems: [
          {
            name: "all",
            label: "همه",
            url: "/en/mashhad/category/travelTours",
          },
          {
            name: "northTour",
            label: "تور شمال",
            url: "/en/mashhad/category/travelTours/northTour",
          },
          {
            name: "southTour",
            label: "تور جنوب",
            url: "/en/mashhad/category/travelTours/southTour",
          },
          {
            name: "forigenTour",
            label: "تور خارجی ",
            url: "/en/mashhad/category/travelTours/forigenTour",
          },
          {
            name: "desertTour",
            label: "تور کویر",
            url: "/en/mashhad/category/travelTours/desertTour",
          },
          {
            name: "azarTour",
            label: "تور آذربایجان",
            url: "/en/mashhad/category/travelTours/azarTour",
          },
          {
            name: "historyTour",
            label: "تور تاریخی و باستانی",
            url: "/en/mashhad/category/travelTours/historyTour",
          },
          {
            name: "raftingTour",
            label: "تور رفتینگ",
            url: "/en/mashhad/category/travelTours/raftingTour",
          },
        ],
      },
      {
        name: "services",
        label: "لوازم  و خدمات",
        icon: <MdCleaningServices className="text-xl text-gray-500" />,
        url: "/en/mashhad/category/services",
        subItems: [
          {
            name: "all",
            label: "همه",
            url: "/en/mashhad/category/services",
          },
          {
            name: "carwash",
            label: "کارواش ",
            url: "/en/mashhad/category/services/carwash",
          },
          {
            name: "repairShop",
            label: "تعمیرگاه و لوازم یدکی",
            url: "/en/mashhad/category/services/repairShop",
          },
          {
            name: "carpetCleaning",
            label: "قالیشویی",
            url: "/en/mashhad/category/services/carpetCleaning",
          },
          {
            name: "laundrySewing",
            label: "خشکشویی و خیاطی",
            url: "/en/mashhad/category/services/laundrySewing",
          },
          {
            name: "atelier",
            label: "آتلیه و خدمات مجلس",
            url: "/en/mashhad/category/services/atelier",
          },
          {
            name: "petShop",
            label: "پت شاپ و حیوانات خانگی",
            url: "/en/mashhad/category/services/petShop",
          },
        ],
      },
      {
        name: "grocery",
        label: "خوار و بار",
        icon: <PiBasket className="text-xl text-gray-500" />,
        url: "/en/mashhad/category/grocery",
        subItems: [
          {
            name: "all",
            label: "همه",
            url: "/en/mashhad/category/grocery",
          },
          {
            name: "chainStores",
            label: "فروشگاه های زنجیر های ",
            url: "/en/mashhad/category/grocery/chainStores",
          },
          {
            name: "superMarket",
            label: "سوپر مارکت",
            url: "/en/mashhad/category/grocery/superMarket",
          },
          {
            name: "protein",
            label: "پروتئنی",
            url: "/en/mashhad/category/grocery/protein",
          },
          {
            name: "fruitVegetable",
            label: "میوه وسبزی ",
            url: "/en/mashhad/category/grocery/fruitVegetable",
          },
          {
            name: "bakeryConfectionery",
            label: "نانوایی و قنادی",
            url: "/en/mashhad/category/grocery/bakeryConfectionery",
          },
          {
            name: "petsShop",
            label: "پت شاپ و حیوانات خانگی",
            url: "/en/mashhad/category/grocery/petsShop",
          },
        ],
      },
      {
        name: "onlineShops",
        label: "فروشگاه های اینترنتی",
        icon: <RiCoupon3Line className="text-xl text-gray-500" />,
        url: "/en/mashhad/category/onlineShops",
        subItems: [
          {
            name: "all",
            label: "همه",
            url: "/en/mashhad/category/onlineShops",
          },
          {
            name: "supersMarket",
            label: "سوپرمارکت و مواد غذایی ",
            url: "/en/mashhad/category/onlineShops/supersMarket",
          },
          {
            name: "travelTicket",
            label: "سفر بلیط هتل",
            url: "/en/mashhad/category/onlineShops/travelTicket",
          },
          {
            name: "clothing",
            label: "مد و پوشاک",
            url: "/en/mashhad/category/onlineShops/clothing",
          },
          {
            name: "sportsEquipment",
            label: "تجهیزات ورزشی و کمپینگ",
            url: "/en/mashhad/category/onlineShops/sportsEquipment",
          },
          {
            name: "onlineServices",
            label: "خدمات آنلاین",
            url: "/en/mashhad/category/onlineShops/onlineServices",
          },
          {
            name: "beautyCosmetics",
            label: "لوازم زیبایی و آرایشی",
            url: "/en/mashhad/category/onlineShops/beautyCosmetics",
          },
          {
            name: "digitalGoods",
            label: "کالای دیجیتال",
            url: "/en/mashhad/category/onlineShops/digitalGoods",
          },
          {
            name: "medicalPharmacy",
            label: "داروخانه و پزشکی",
            url: "/en/mashhad/category/onlineShops/medicalPharmacy",
          },
          {
            name: "cookingAppliances",
            label: "لوازم خانگی آشپزی و ابزار",
            url: "/en/mashhad/category/onlineShops/cookingAppliances",
          },
          {
            name: "learnMovieBookArt",
            label: "آموزش فیلم کتاب هنر",
            url: "/en/mashhad/category/onlineShops/learnMovieBookArt",
          },
        ],
      },
      {
        name: "stores",
        label: "فروشگاه های حضوری",
        icon: <IoStorefrontOutline className="text-xl text-gray-500" />,
        url: "/en/mashhad/category/stores",
        subItems: [
          {
            name: "all",
            label: "همه",
            url: "/en/mashhad/category/stores",
          },
          {
            name: "pharmacy",
            label: "داروخانه",
            url: "/en/mashhad/category/stores/pharmacy",
          },
          {
            name: "clothing",
            label: "پوشاک",
            url: "/en/mashhad/category/stores/clothing",
          },
          {
            name: "cosmetics",
            label: "لوازم آرایشی و بهداشتی",
            url: "/en/mashhad/category/stores/cosmetics",
          },
          {
            name: "flowers",
            label: "گل و گیاه فروشی",
            url: "/en/mashhad/category/stores/flowers",
          },
          {
            name: "attari",
            label: "عطاری",
            url: "/en/mashhad/category/stores/attari",
          },
          {
            name: "fashionOrnaments",
            label: "مد و زیورآلات",
            url: "/en/mashhad/category/stores/fashionOrnaments",
          },
          {
            name: "bookstoreStationery",
            label: "کتاب فروشی و لوازم التحریر",
            url: "/en/mashhad/category/stores/bookstoreStationery",
          },
          {
            name: "digitalToolsStore",
            label: "فروشگاه لوازم دیجیتال",
            url: "/en/mashhad/category/stores/digitalToolsStore",
          },
          {
            name: "sportStore",
            label: "فروشگاه لوازم ورزشی و تفریحی",
            url: "/en/mashhad/category/stores/sportStore",
          },
        ],
      },
    ],
  },
];

export const getItems = () => {
  return menuItems;
};
