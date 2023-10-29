import Image from "next/image";

// عکس لینکهای که تمام عرض صفحه را در بر میگیرد برای اعلام بنر تخفیف

const OnePic = () => {
  return (
    <div className="container mx-auto my-4">
        <Image
          src="/images/picturesAdvertisment/1pic.webp"
          width={820}
          height={328}
          alt="تبلیغ یک دانه ای"
          style={{ objectFit: "cover", margin: "0 auto", borderRadius: "16px" }}
        />
    </div>
  );
};

export default OnePic;
