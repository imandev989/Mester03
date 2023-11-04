import { SiCodereview } from "react-icons/si";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";

const ProfileCheck = () => {
  return (
    <div className="flex gap-2 items-center py-2">
      <div className="flex">
        <div className="flex">
          <SiCodereview className="text-xl" />
          <Link href="/mesterPosts">
            <span className="sm:pr-1 text-xs sm:text-sm">مستر پست</span>
          </Link>{" "}
        </div>
      </div>
      <div className="flex ">
        <div className="flex">
          <IoLocationOutline className="text-xl" />
          <Link href="/map">
            <span className="sm:pr-1 text-xs sm:text-sm">شهرگردی</span>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default ProfileCheck;
