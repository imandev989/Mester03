import Image from "next/image";

const TwoPic = () => {
  return (
// عکس دوتایی لینکهای که تمام عرض صفحه را در بر میگیرد برای اعلام بنر تخفیف

    <div className="container mx-auto my-4">
      <div className="flex gap-4 justify-center">
        <div>
          <Image
            src="/images/picturesAdvertisment/2pic1.webp"
            width={644}
            height={258}
            alt="تبلیغ 2 دانه ای"
            style={{ objectFit: "cover", borderRadius: "16px" }}
          />
        </div>
        <div>
          <Image
            src="/images/picturesAdvertisment/2pic2.webp"
            width={644}
            height={258}
            alt="تبلیغ 2 دانه ای"
            style={{ objectFit: "cover", borderRadius: "16px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default TwoPic;
