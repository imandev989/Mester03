import Image from "next/image";

const FourPic = () => {
  return (
    <div className=" container mx-auto my-2 py-2">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4">
        <div>
          <Image
            src="/images/picturesAdvertisment/4pic1.webp"
            width={314}
            height={236}
            alt="تبلیغ 4 دانه ای"
            style={{ objectFit: "cover", borderRadius: "16px" }}
          />
        </div>
        <div>
          <Image
            src="/images/picturesAdvertisment/4pic2.webp"
            width={314}
            height={236}
            alt="تبلیغ 4 دانه ای"
            style={{ objectFit: "cover", borderRadius: "16px" }}
          />
        </div>

        <div>
          <Image
            src="/images/picturesAdvertisment/4pic3.webp"
            width={314}
            height={236}
            alt="تبلیغ 4 دانه ای"
            style={{ objectFit: "cover", borderRadius: "16px" }}
          />
        </div>
        <div>
          <Image
            src="/images/picturesAdvertisment/4pic4.webp"
            width={314}
            height={236}
            alt="تبلیغ 4 دانه ای"
            style={{ objectFit: "cover", borderRadius: "16px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default FourPic;
