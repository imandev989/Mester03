import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { FiMoreHorizontal, FiSend } from "react-icons/fi";
import { VscComment } from "react-icons/vsc";
import Image from "next/image";
import p1 from "@/public/images/configsImages/09.jpg";

const PostCard = () => {
  return (
    <div className="mx-auto flex flex-col justify-center max-w-xl pb-12 ">
      <div className="flex flex-col gap-2 bg-blue rounded-xl border border-slate-200 my-10">
        <div className="flex flex-row justify-between items-center mt-2 mx-4">
          {/* Heading */}
          <div className="flex flex-row items-center gap-4">
            <Image
              src="/images/configsImages/MrTabligh.jpg"
              priority={true}
              width={50}
              height={50}
              alt="لوگوی مستر تبلیغ"
              style={{ borderRadius: "50px" }}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span> مستر تبلیغ</span>
          </div>
          <FiMoreHorizontal className="w-6 h-6" />
        </div>
        <div>
          <Image src={p1} alt="iman" />
        </div>
        <div className="my-2 mx-4 flex flex-row justify-between">
          <div className="flex flex-row gap-4 items-center">
            <AiOutlineHeart className="w-8 h-8" />
            <VscComment className="w-8 h-8" />
            <FiSend className="w-7 h-7" />
          </div>
          <BsBookmark className="w-6 h-6" />
        </div>
        <div className="mb-4 mx-4">
          <div className="flex flex-row gap-4 items-center mb-2">
            <Image
              className="w-6 h-6 rounded-full"
              src="/images/configsImages/MrTabligh.jpg"
              width={50}
              height={50}
            />
            <p>
              لایک شده توسط <strong>نام کاربری</strong> و
              <strong> ۱۲۹۴ نفر دیگر</strong>
            </p>
          </div>
          <p className="mb-2">
            <strong>نام کاربری </strong> لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
            متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
            شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
            آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
            شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
            فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت
            که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
            رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <span className="text-slate-500 text-sm ">نمایش همه ۱۶۴ نظر</span>
          <p className="text-slate-600 text-xs uppercase">۱۲ ساعت قبل</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-blue rounded-xl border border-slate-200 my-10">
        <div className="flex flex-row justify-between items-center mt-2 mx-4">
          {/* Heading */}
          <div className="flex flex-row items-center gap-4">
            <Image
              src="/images/configsImages/MrTabligh.jpg"
              priority={true}
              width={50}
              height={50}
              alt="لوگوی مستر تبلیغ"
              style={{ borderRadius: "50px" }}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span> مستر تبلیغ</span>
          </div>
          <FiMoreHorizontal className="w-6 h-6" />
        </div>
        <div>
          <Image src={p1} alt="iman" />
        </div>
        <div className="my-2 mx-4 flex flex-row justify-between">
          <div className="flex flex-row gap-4 items-center">
            <AiOutlineHeart className="w-8 h-8" />
            <VscComment className="w-8 h-8" />
            <FiSend className="w-7 h-7" />
          </div>
          <BsBookmark className="w-6 h-6" />
        </div>
        <div className="mb-4 mx-4">
          <div className="flex flex-row gap-4 items-center mb-2">
            <Image
              className="w-6 h-6 rounded-full"
              src="/images/configsImages/MrTabligh.jpg"
              width={50}
              height={50}
            />
            <p>
              لایک شده توسط <strong>نام کاربری</strong> و
              <strong> ۱۲۹۴ نفر دیگر</strong>
            </p>
          </div>
          <p className="mb-2">
            <strong>نام کاربری </strong> لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
            متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
            شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
            آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
            شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
            فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت
            که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
            رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <span className="text-slate-500 text-sm ">نمایش همه ۱۶۴ نظر</span>
          <p className="text-slate-600 text-xs uppercase">۱۲ ساعت قبل</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-blue rounded-xl border border-slate-200 my-10">
        <div className="flex flex-row justify-between items-center mt-2 mx-4">
          {/* Heading */}
          <div className="flex flex-row items-center gap-4">
            <Image
              src="/images/configsImages/MrTabligh.jpg"
              priority={true}
              width={50}
              height={50}
              alt="لوگوی مستر تبلیغ"
              style={{ borderRadius: "50px" }}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span> مستر تبلیغ</span>
          </div>
          <FiMoreHorizontal className="w-6 h-6" />
        </div>
        <div>
          <Image src={p1} alt="iman" />
        </div>
        <div className="my-2 mx-4 flex flex-row justify-between">
          <div className="flex flex-row gap-4 items-center">
            <AiOutlineHeart className="w-8 h-8" />
            <VscComment className="w-8 h-8" />
            <FiSend className="w-7 h-7" />
          </div>
          <BsBookmark className="w-6 h-6" />
        </div>
        <div className="mb-4 mx-4">
          <div className="flex flex-row gap-4 items-center mb-2">
            <Image
              className="w-6 h-6 rounded-full"
              src="/images/configsImages/MrTabligh.jpg"
              width={50}
              height={50}
            />
            <p>
              لایک شده توسط <strong>نام کاربری</strong> و
              <strong> ۱۲۹۴ نفر دیگر</strong>
            </p>
          </div>
          <p className="mb-2">
            <strong>نام کاربری </strong> لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
            متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
            شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
            آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
            شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
            فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت
            که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
            رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <span className="text-slate-500 text-sm ">نمایش همه ۱۶۴ نظر</span>
          <p className="text-slate-600 text-xs uppercase">۱۲ ساعت قبل</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-blue rounded-xl border border-slate-200 my-10">
        <div className="flex flex-row justify-between items-center mt-2 mx-4">
          {/* Heading */}
          <div className="flex flex-row items-center gap-4">
            <Image
              src="/images/configsImages/MrTabligh.jpg"
              priority={true}
              width={50}
              height={50}
              alt="لوگوی مستر تبلیغ"
              style={{ borderRadius: "50px" }}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span> مستر تبلیغ</span>
          </div>
          <FiMoreHorizontal className="w-6 h-6" />
        </div>
        <div>
          <Image src={p1} alt="iman" />
        </div>
        <div className="my-2 mx-4 flex flex-row justify-between">
          <div className="flex flex-row gap-4 items-center">
            <AiOutlineHeart className="w-8 h-8" />
            <VscComment className="w-8 h-8" />
            <FiSend className="w-7 h-7" />
          </div>
          <BsBookmark className="w-6 h-6" />
        </div>
        <div className="mb-4 mx-4">
          <div className="flex flex-row gap-4 items-center mb-2">
            <Image
              className="w-6 h-6 rounded-full"
              src="/images/configsImages/MrTabligh.jpg"
              width={50}
              height={50}
            />
            <p>
              لایک شده توسط <strong>نام کاربری</strong> و
              <strong> ۱۲۹۴ نفر دیگر</strong>
            </p>
          </div>
          <p className="mb-2">
            <strong>نام کاربری </strong> لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
            متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
            شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
            آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
            شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
            فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت
            که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
            رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <span className="text-slate-500 text-sm ">نمایش همه ۱۶۴ نظر</span>
          <p className="text-slate-600 text-xs uppercase">۱۲ ساعت قبل</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-blue rounded-xl border border-slate-200 my-10">
        <div className="flex flex-row justify-between items-center mt-2 mx-4">
          {/* Heading */}
          <div className="flex flex-row items-center gap-4">
            <Image
              src="/images/configsImages/MrTabligh.jpg"
              priority={true}
              width={50}
              height={50}
              alt="لوگوی مستر تبلیغ"
              style={{ borderRadius: "50px" }}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span> مستر تبلیغ</span>
          </div>
          <FiMoreHorizontal className="w-6 h-6" />
        </div>
        <div>
          <Image src={p1} alt="iman" />
        </div>
        <div className="my-2 mx-4 flex flex-row justify-between">
          <div className="flex flex-row gap-4 items-center">
            <AiOutlineHeart className="w-8 h-8" />
            <VscComment className="w-8 h-8" />
            <FiSend className="w-7 h-7" />
          </div>
          <BsBookmark className="w-6 h-6" />
        </div>
        <div className="mb-4 mx-4">
          <div className="flex flex-row gap-4 items-center mb-2">
            <Image
              className="w-6 h-6 rounded-full"
              src="/images/configsImages/MrTabligh.jpg"
              width={50}
              height={50}
            />
            <p>
              لایک شده توسط <strong>نام کاربری</strong> و
              <strong> ۱۲۹۴ نفر دیگر</strong>
            </p>
          </div>
          <p className="mb-2">
            <strong>نام کاربری </strong> لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
            متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
            شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
            آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
            شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
            فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت
            که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
            رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <span className="text-slate-500 text-sm ">نمایش همه ۱۶۴ نظر</span>
          <p className="text-slate-600 text-xs uppercase">۱۲ ساعت قبل</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
