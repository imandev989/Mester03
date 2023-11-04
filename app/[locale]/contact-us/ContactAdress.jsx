import Image from "next/image";
import { CiLocationOn, CiPhone } from "react-icons/ci";

const ContactAdress = () => {
    return (
        <div className="container mx-auto mt-8 px-2 py-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4 px-4 text-justify">
          <div className="flex flex-col w-full sm:w-1/2  gap-4">
            <div className="h-[60%] ">
              <div className="mb-4  text-center">
                <span>پاسخگوی شما خواهیم بود</span>
              </div>
              <div className="pb-4 px-4">
                <p className="px-2 leading-6">
                  برای ارتباط با ما و مطرح کردن هر نوع ابهام، انتقاد و پیشنهاد
                  در رابطه با خدمات، شیوه‌ی خرید از تخفیفان، یا شرایط و نحوه‌ی
                  استفاده از کوپن تخفیفان از طریق شماره تلفن و ایمیل زیر در تماس
                  باشید. همکاران ما از ساعت 10 تا 18 پاسخگوی شما خواهند بود
                </p>
              </div>
            </div>
            <div className="h-[40%]  flex flex-col gap-2">
              <div className="shadow-lg rounded-md py-2 px-4 flex justify-between items-center  h-1/2">
                <div>
                  <CiLocationOn className="text-orange-500 text-[2.5em] font-extrabold" />
                </div>
                <div>
                  <p>
                    دفتر مرکزی : تهران - شهرک غرب - بلوار دادمان - انتهای خیابان
                    سپهر غربی - خیابان گلبرگ سوم - کوچه گلستان دوم - پلاک 100
                  </p>
                </div>
              </div>
              <div className="shadow-lg rounded-md py-2 px-4 flex justify-between h-1/2 items-center">
                <div>
                  <CiPhone className="text-orange-500 text-[2.5em] font-extrabold" />
                </div>
                <div>
                  <span>۰۵۱−۳۲۰۱۱</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 gap-4">
            <div className="mx-auto hidden sm:flex sm:h-[60%]">
              <Image
                src="/images/contactus/02.svg"
                priority={true}
                width={347}
                height={205}
                alt="تماس با ما"
              />
            </div>
            <div className="h-[40%]  flex flex-col gap-2">
              <div className="shadow-lg rounded-md py-2 px-4 flex justify-between items-center  h-1/2">
                <div>
                  <CiLocationOn className="text-orange-500 text-[2.5em] font-extrabold" />
                </div>
                <div>
                  <p>
                    دفتر مرکزی : تهران - شهرک غرب - بلوار دادمان - انتهای خیابان
                    سپهر غربی - خیابان گلبرگ سوم - کوچه گلستان دوم - پلاک 100
                  </p>
                </div>
              </div>
              <div className="shadow-lg rounded-md py-2 px-4 flex justify-between h-1/2 items-center">
                <div>
                  <CiPhone className="text-orange-500 text-[2.5em] font-extrabold" />
                </div>
                <div>
                  <span>۰۵۱−۳۲۰۱۱</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ContactAdress;