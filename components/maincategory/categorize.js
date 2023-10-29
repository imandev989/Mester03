
import { IoIosCloudOutline } from "react-icons/io";
import { BiCategoryAlt } from "react-icons/bi";
import { PiSoccerBall } from "react-icons/pi";
export const menuItems = [
    {
        name: "categorizes",
        label: "دسته بندی ها",
        icon:<BiCategoryAlt className="text-xl "/>,
        url: "",
        subItems: [

            {
                name: "sportEntertainment",
                label: "تفریح و ورزش",
                icon: < PiSoccerBall className="text-xl text-gray-500" / > ,
                url: "",
                subItems: [{
                        name: "all",
                        label: "همه",
                        url: "",
                    },
                    {
                        name: "poll",
                        label: "استخر",
                        url: "",
                    },
                    {
                        name: "amusementPark",
                        label: "شهربازی",
                        url: "",
                    },
                    {
                        name: "escapeRoom",
                        label: "اتاق فرار",
                        url: "",
                    },
                    {
                        name: "groupGames",
                        label: "بازی های گروهی",
                        url: "",
                    },
                    {
                        name: "aerobicSports",
                        label: "ورزش های هوازی",
                        url: "",
                    },
                    {
                        name: "sportClubs",
                        label: "باشگاه های ورزشی",
                        url: "",
                    },
                ],
            },
            {
                name: "restaurantCafe",
                label: "رستوران و کافه",
                icon: < IoIosCloudOutline / > ,
                url: "",
                subItems: [
                    {
                        name: "all",
                        label: "همه",
                        url: "",
                    },
                    {
                        name: "iranianFood",
                        label: "غذای ایرانی و سنتی",
                        url: "",
                    },
                    {
                        name: "foreignFood",
                        label: "غذای خارجی",
                        url: "",
                    },
                    {
                        name: "fastFood",
                        label: "فست فود",
                        url: "",
                    },
                    {
                        name: "kitchen",
                        label: "سفره خانه",
                        url: "",
                    },
                    {
                        name: "selfService",
                        label: "بوفه و سلف سرویس ",
                        url: "",
                    },
                    {
                        name: "cafeShop",
                        label: "کافی شاپ",
                        url: "",
                    },
                    {
                        name: "breakfast",
                        label: "صبحانه",
                        url: "",
                    },
                    {
                        name: "catering",
                        label: "کترینگ",
                        url: "",
                    },
                ],
            },
            {
                name: "TheaterArt",
                label: "تئاتر و هنر",
                icon: < IoIosCloudOutline / > ,
                url: "",
                subItems: [
                    {
                        name: "all",
                        label: "همه",
                        url: "",
                    },
                    {
                        name: "theater",
                        label: "تئاتر",
                        url: "",
                    },
                    {
                        name: "concert",
                        label: "کنسرت",
                        url: "",
                    },
                    {
                        name: "cinema",
                        label: "سینما",
                        url: "",
                    },
                    {
                        name: "childernTheater",
                        label: "تئاتر کودک و نوجوان",
                        url: "",
                    },
                    {
                        name: "showCulture",
                        label: "نمایش و فرهنگی",
                        url: "",
                    },
                    {
                        name: "atelier",
                        label: "آتلیه و خدمات چاپ",
                        url: "",
                    },

                ],

            },

            {
                name: "medicalHealth",
                label: "پزشکی و سلامت ",
                icon: < IoIosCloudOutline / > ,
                url: "",
                subItems: [
                    {
                        name: "all",
                        label: "همه",
                        url: "",
                    },
                    {
                        name: "laser",
                        label: "لیزر موهای زائد",
                        url: "",
                    },
                    {
                        name: "botox",
                        label: "ژل و بوتاکس",
                        url: "",
                    },
                    {
                        name: "fitness",
                        label: "خدمات تناسب اندام و لاغری",
                        url: "",
                    },
                    {
                        name: "massage",
                        label: "ماساژ",
                        url: "",
                    },
                    {
                        name: "skinBeauty",
                        label: "پوست و زیبایی",
                        url: "",
                    },
                    {
                        name: "dental",
                        label: "خدمات دندانپزشکی",
                        url: "",
                    },
                    {
                        name: "rejuvenationSlimming",
                        label: "جوانسازی و اسلیمینگ",
                        url: "",
                    },
                    {
                        name: "counseling",
                        label: "مراکز مشاوره",
                        url: "",
                    },
                ],

            },
            {
                name: "learning",
                label: "آموزشی",
                icon: < IoIosCloudOutline / > ,
                url: "",
                subItems: [
                    {
                        name: "all",
                        label: "همه",
                        url: "",
                    },
                    {
                        name: "computer",
                        label: "کامپیوتر",
                        url: "",
                    },
                    {
                        name: "music",
                        label: "موسیقی",
                        url: "",
                    },
                    {
                        name: "cooking",
                        label: "آشپزی",
                        url: "",
                    },
                    {
                        name: "forigenLanguage",
                        label: "زبان های خارجی",
                        url: "",
                    },
                    {
                        name: "conference",
                        label: "گردهمایی و همایش",
                        url: "",
                    },
                    {
                        name: "accounting",
                        label: "حسابداری ",
                        url: "",
                    },
                    {
                        name: "personalSkills",
                        label: "مهارت های فردی",
                        url: "",
                    },
                    {
                        name: "onlineLearning",
                        label: "آموزش های آنلاین",
                        url: "",
                    },
                    {
                        name: "makeUpLearning",
                        label: "آموزش آرایشگری و میکاپ",
                        url: "",
                    },
                    {
                        name: "businessSkills",
                        label: "مهارت کسب و کار",
                        url: "",
                    },
                ],

            },


            {
                name: "beautyMakeUp",
                label: "زیبایی و آرایشگری",
                icon: < IoIosCloudOutline / > ,
                url: "",
                subItems: [
                    {
                        name: "all",
                        label: "همه",
                        url: "",
                    },
                    {
                        name: "nail",
                        label: "خدمات ناخن",
                        url: "",
                    },
                    {
                        name: "skin",
                        label: "خدمات پوست ",
                        url: "",
                    },
                    {
                        name: "waxing",
                        label: "اپلاسیون",
                        url: "",
                    },
                    {
                        name: "hairSalons",
                        label: "آرایشگاه زنانه ",
                        url: "",
                    },
                    {
                        name: "eyebrowsEyelashes",
                        label: "خدمات ابرو و مژه",
                        url: "",
                    },
                    {
                        name: "bridalCenters",
                        label: "مراکز تخصصی عروس ",
                        url: "",
                    },

                ],

            },
            {
                name: "travelTours",
                label: "تورهای مسافرتی",
                icon: < IoIosCloudOutline / > ,
                url: "",
                subItems: [
                    {
                        name: "all",
                        label: "همه",
                        url: "",
                    },
                    {
                        name: "northTour",
                        label: "تور شمال",
                        url: "",
                    },
                    {
                        name: "southTour",
                        label: "تور جنوب",
                        url: "",
                    },
                    {
                        name: "forigenTour",
                        label: "تور خارجی ",
                        url: "",
                    },
                    {
                        name: "desertTour",
                        label: "تور کویر",
                        url: "",
                    },
                    {
                        name: "azarTour",
                        label: "تور آذربایجان",
                        url: "",
                    },
                    {
                        name: "historyTour",
                        label: "تور تاریخی و باستانی",
                        url: "",
                    },
                    {
                        name: "raftingTour",
                        label: "تور رفتینگ",
                        url: "",
                    },

                ],

            },
            {
                name: "services",
                label: "لوازم  و خدمات",
                icon: < IoIosCloudOutline / > ,
                url: "",
                subItems: [
                    {
                        name: "all",
                        label: "همه",
                        url: "",
                    },
                    {
                        name: "carwash",
                        label: "کارواش ",
                        url: "",
                    },
                    {
                        name: "repairShop",
                        label: "تعمیرگاه و لوازم یدکی",
                        url: "",
                    },
                    {
                        name: "carpetCleaning",
                        label: "قالیشویی",
                        url: "",
                    },
                    {
                        name: "laundrySewing",
                        label: "خشکشویی و خیاطی",
                        url: "",
                    },
                    {
                        name: "atelier",
                        label: "آتلیه و خدمات مجلس",
                        url: "",
                    },
                    {
                        name: "petShop",
                        label: "پت شاپ و حیوانات خانگی",
                        url: "",
                    },


                ],

            },
            {
                name: "grocery",
                label: "خوار و بار",
                icon: < IoIosCloudOutline / > ,
                url: "",
                subItems: [
                    {
                        name: "all",
                        label: "همه",
                        url: "",
                    },
                    {
                        name: "chainStores",
                        label: "فروشگاه های زنجیر های ",
                        url: "",
                    },
                    {
                        name: "superMarket",
                        label: "سوپر مارکت",
                        url: "",
                    },
                    {
                        name: "protein",
                        label: "پروتئنی",
                        url: "",
                    },
                    {
                        name: "fruitVegetable",
                        label: "میوه وسبزی ",
                        url: "",
                    },
                    {
                        name: "bakeryConfectionery",
                        label: "نانوایی و قنادی",
                        url: "",
                    },
                    {
                        name: "petsShop",
                        label: "پت شاپ و حیوانات خانگی",
                        url: "",
                    },


                ],

            },
            {
                name: "onlineShops",
                label: "فروشگاه های اینترنتی",
                icon: < IoIosCloudOutline / > ,
                url: "",
                subItems: [
                    {
                        name: "all",
                        label: "همه",
                        url: "",
                    },
                    {
                        name: "supersMarket",
                        label: "سوپرمارکت و مواد غذایی ",
                        url: "",
                    },
                    {
                        name: "travelTicket",
                        label: "سفر بلیط هتل",
                        url: "",
                    },
                    {
                        name: "clothing",
                        label: "مد و پوشاک",
                        url: "",
                    },
                    {
                        name: "sportsEquipment",
                        label: "تجهیزات ورزشی و کمپینگ",
                        url: "",
                    },
                    {
                        name: "onlineServices",
                        label: "خدمات آنلاین",
                        url: "",
                    },
                    {
                        name: "beautyCosmetics",
                        label: "لوازم زیبایی و آرایشی",
                        url: "",
                    },
                    {
                        name: "digitalGoods",
                        label: "کالای دیجیتال",
                        url: "",
                    },
                    {
                        name: "medicalPharmacy",
                        label: "داروخانه و پزشکی",
                        url: "",
                    },
                    {
                        name: "cookingAppliances",
                        label: "لوازم خانگی آشپزی و ابزار",
                        url: "",
                    },
                    {
                        name: "learnMovieBookArt",
                        label: "آموزش فیلم کتاب هنر",
                        url: "",
                    },


                ],

            },
            {
                name: "stores",
                label: "فروشگاه های حضوری",
                icon: < IoIosCloudOutline / > ,
                url: "",
                subItems: [
                    {
                        name: "all",
                        label: "همه",
                        url: "",
                    },
                    {
                        name: "pharmacy",
                        label: "داروخانه",
                        url: "",
                    },
                    {
                        name: "clothing",
                        label: "پوشاک",
                        url: "",
                    },
                    {
                        name: "cosmetics",
                        label: "لوازم آرایشی و بهداشتی",
                        url: "",
                    },
                    {
                        name: "flowers",
                        label: "گل و گیاه فروشی",
                        url: "",
                    },
                    {
                        name: "attari",
                        label: "عطاری",
                        url: "",
                    },
                    {
                        name: "fashionOrnaments",
                        label: "مد و زیورآلات",
                        url: "",
                    },
                    {
                        name: "bookstoreStationery",
                        label: "کتاب فروشی و لوازم التحریر",
                        url: "",
                    },
                    {
                        name: "digitalToolsStore",
                        label: "فروشگاه لوازم دیجیتال",
                        url: "",
                    },
                    {
                        name: "sportStore",
                        label: "فروشگاه لوازم ورزشی و تفریحی",
                        url: "",
                    },



                ],

            },
        ]
    }

]


export const getItems = () => {
    return menuItems[0].subItems;
}