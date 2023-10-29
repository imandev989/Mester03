import Image from "next/image";
const ProfileAvatar = () => {
  return (
    <div className="flex-col mx-auto rounded-full w-[80px] mb-4">
      <div className="bg-gradient-to-tr from-yellow-500 to-red-600 p-[2px] rounded-full  mx-auto ">
        <div className="bg-white rounded-full p-1 ">
          <Image
            src="/images/configsImages/MrTabligh.jpg"
            priority={true}
            width={70}
            height={70}
            alt="لوگوی مستر تبلیغ"
            style={{ borderRadius: "50px", margin: "0px auto 0px auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileAvatar;
