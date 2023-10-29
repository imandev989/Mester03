import Image from "next/image";

import { BsInstagram, BsWhatsapp, BsTelegram, BsYoutube } from "react-icons/bs";

const ContactSocial = () => {
  // console.log("SSR")
  return (
      <div className="container px-10 py-6 mt-8 bg-gray-100 rounded-lg shadow-md">
        <div className="flex flex-col sm:flex-row gap-4 my-4 items-center align-middle">
          <div className="w-1/2 hidden sm:block">
            <Image
              src="/images/contactus/03.svg"
              priority={true}
              width={316}
              height={283}
              alt="تماس با ما"
            />
          </div>
          <div className="flex flex-col items-center gap-4 w-1/2">
            <div>
              <span>شبکه‌های اجتماعی</span>
            </div>
            <div className="w-full ">
              <p className="px-2 text-justify text-xs sm:text-sm">
                ما را در شبکه‌های اجتماعی دنبال کنید. پیشنهادهای جدید را در
                صفحه‌ی اینستاگرام تخفیفان ببینید و نظرات خود را در توییتر و
                لینکداین ما بنویسید. می‌توانید به سرعت از تخفیف‌ها با خبر شوید.
                در خبرنامه‌ی تخفیفان عضو شوید و هر روز از جدیدترین پیشنهادهای
                تخفیف‌ ویژه‌ی روز مطلع شوید.
              </p>
            </div>
            <div className="flex justify-center gap-4 sm:mt-4">
              <div className="text-gray-400 text-xl sm:text-4xl">
                <BsInstagram />
              </div>
              <div className="text-gray-400 text-xl sm:text-4xl">
                <BsWhatsapp />
              </div>
              <div className="text-gray-400 text-xl sm:text-4xl">
                <BsTelegram />
              </div>
              <div className="text-gray-400 text-xl sm:text-4xl">
                <BsYoutube />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ContactSocial;
