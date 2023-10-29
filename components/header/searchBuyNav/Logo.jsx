import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";



const Logo = () => {
  return (
    <>
    
    <div className="hidden lg:flex">
      <Link href="/">
        <Image
          src="/images/configsImages/MrTabligh.jpg"
          priority={true}
          width={50}
          height={50}
          alt="لوگوی مستر تبلیغ"
          style={{ borderRadius: "50px" }}
        />
      </Link>
    </div>
    </>
  );
};

export default Logo;
