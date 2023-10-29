import Image from "next/image";
import "./style.css";
import Link from "next/link";

import Stories from "react-insta-stories";

const Story = ({ title, img, url, alt, story }) => {
  // console.log("title IS:", title)
  // console.log("img IS:", img)
  // console.log("url IS:", url)
  // console.log("alt IS:", alt)
  // console.log("STORY IS:", story)
  // console.log("STORY IS:", story.stories)

  return (
    <>
      <div className=" flex-col space-y-3 mx-auto story-item">
        <div className="bg-gradient-to-tr from-yellow-500 to-red-600 p-[2px] rounded-full sm:min-w-[72px] ">
          <div className="bg-white rounded-full p-1 cursor-pointer">
            <Link href="#">
              <Image
                src={img}
                alt={alt}
                width={300}
                height={200}
                className="rounded-full w-[55px] h-[55px] sm:w-[64px] sm:h-[64px]"
              />
            </Link>
          </div>
        </div>

        <p className="text-xs w-16 truncate text-center">{title}</p>
        {/* <div className="absolute sm:mt-20 -top-10 right-0  h-[100vh]  w-[100vw] sm:w-full  sm:h-[700px] z-[99999999] opacity-30 bg-white">
            <Stories
              loop={true}
              stories={story.stories}
              width={"100%"}
              height={"100%"}
            />
        </div> */}
      </div>
    </>
  );
};

export default Story;
