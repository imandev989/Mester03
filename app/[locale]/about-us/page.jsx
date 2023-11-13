import { FcDonate, FcDownload, FcStatistics } from "react-icons/fc";

const AboutUs = () => {
  return (
    <section>
      {/* <Container> */}
      <div className="flex flex-col justify-center items-center h-[50vh] bg-orange-500 pt-52 gap-4 pb-20 ">
        <div>
          <h3 className="text-white">درباره مستر</h3>
        </div>

        <div>
          <p className="text-white text-center text- mx-4 ">
            وب سایت مستر تستر با رویکرد معرفی تخفیف در خدمات ارائه شده در کسب و
            کار های مختلف راه اندازی شده است. تا شما بتوانید به راحتی به جستجوی
            تحهیزات یا خدمات مورد نیاز خود با کمترین قیمت و بهترین کیفیت در اسرع
            وقت دسترسی داشته باشید.
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <div className="flex flex-col justify-center items-center p-4 mb-20">
          <div>
            <h3>مستر چیست و هدفش چیست؟</h3>
          </div>
          <div className="mb-8">
            <p className="text-gray-400 pt-2">
              ژاکت با الگو برداری از نمونه خارجی خود envato راه اندازی شده است
              با این هدف که بازار بزرگی برای طراحان و برنامه نویسان باشد
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div>
                <FcDonate style={{ fontSize: "10em" }} />
              </div>
              <div>
                <span className="text-center">۶ ماه گارانتی بازگشت وجه</span>
              </div>
              <div className="text-center px-10 mx-auto">
                <p className="text-center">
                  با خرید هر محصول از ژاکت، ۶ ماه پشتیبانی تضمین شده همراه با
                  گارانتی بازگشت وجه دریافت خواهید کرد
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div>
                <FcDownload style={{ fontSize: "10em" }} />
              </div>
              <div>
                <span>بروز رسانی خودکار محصولات</span>
              </div>
              <div className="text-center px-10 mx-auto">
                <p className="text-center">
                  با نصب بروز رسان هوشمند، محصولات خریداری شده از ژاکت را از
                  پیشخوان وردپرس بروز رسانی کنید
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div>
                <FcStatistics style={{ fontSize: "10em" }} />
              </div>
              <div>
                <span>تضمین کیفیت و اصالت محصولات</span>
              </div>
              <div className="text-center px-10 mx-auto">
                <p className="text-center">
                  کلیه محصولات ژاکت تنها پس از تایید کیفیت و اصالت تیم تخصصی
                  بررسی محصول، در ژاکت قرار می‌گیرند.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-500 py-10 mx-auto">
        <div className="container mx-auto mt-8">
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-white text-center block">داستان مستر</span>
              <h6 className="text-white text-center">برترین مارکت تبلیغ</h6>
            </div>
            <div className="mt-4">
              <p className="text-white text-center px-10">
                ژاکت از سال ۲۰۱۴ توسط علی حاجی محمدی تاسیس شد و فعالیت خود را به
                عنوان دومین محصول مجموعه همیار وردپرس،تحت نام Marketwp.ir، به
                معنی مارکت وردپرس آغاز کرد و بعد از گذشت ۲ سال نام خود را به
                zhaket.com (ژاکت) تغییر داد و تحت عنوان شرکت ژرف اندیشان کار و
                توسعه به فعالیت خود ادامه داد.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </Container> */}
    </section>
  );
};

export default AboutUs;
