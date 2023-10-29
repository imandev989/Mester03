// import { useSelector } from "react-redux";
import Image from "next/image";

const TopAdd = () => {
  // const topAdd = useSelector((state) => state.configs);

  return (
    <div className="bg-blue-500">
      <div className="container mx-auto w-full h-[5vh] ">
        <a href="www.google.com" target="_blank" >
          <Image
            src="/images/configsImages/tabligh.jpg"
            priority={true}
            width={1200}
            height={200}
            alt="بنر تبلیغ"
            className="object-cover mx-auto"
          />
        </a>
      </div>
    </div>
  );
};

export default TopAdd;
