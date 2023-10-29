
import { MdOutlineBusinessCenter, MdSupportAgent, MdPayment,MdDiscount } from "react-icons/md";

import FooterOfferItem from "./FooterOfferItem";

const offers = [
  {
    icon: <MdDiscount className="text-2xl"/>,
    title: "تخفیف های ویژه",
    subtitle: "ارایه تخفیف‌های باورنکردنی و دوره‌ای در روز‌های خاص",
  },
  {
    icon: <MdPayment className="text-2xl"/>,
    title: "پرداخت آنلاین",
    subtitle: "خرید نت برگ با پرداخت آنلاین در هر ساعتی از شبانه روز",
  },
  // {
  //   icon: <WorkspacePremiumOutlinedIcon />,
  //   title: "تضمین کیفیت خدمات",
  //   subtitle: "بررسی کیفیت خدمات و کالاها توسط کارشناسان مربوطه",
  // },
  {
    icon: <MdOutlineBusinessCenter className="text-2xl"/>,
    title: "خدمات تجارت امن",
    subtitle: "حفظ حریم خصوصی کاربران در بستر تجارت الکترونیک ایمن",
  },
  {
    icon: <MdSupportAgent className="text-2xl"/>,
    title: "پشتیبانی ۲۴ ساعته",
    subtitle: "در تمامی مراحل سفارش پشتیبانی نت‌برگ کنار شماست",
  },
];

const FooterOffers = () => {
  return (
    <div className="grid grid-cols-2  w-full md:grid-cols-4  justify-center py-6 bg-gray-100  rounded-md my-8 ">
      {offers.map((offer, index) => (
        <FooterOfferItem
          key={index}
          icon={offer.icon}
          title={offer.title}
          subtitle={offer.subtitle}
        />
      ))}
    </div>
  );
};

export default FooterOffers;
