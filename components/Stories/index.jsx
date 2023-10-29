import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { getStories } from "./storiesData";
import Story from "./Story";
import { useState, useRef } from "react";

const Stories = () => {
  const storiesCollection = getStories();
  const storiesRef = useRef(null);
  const [showLeft, setShowLeft] = useState(true);
  const [showRight, setShowRight] = useState(false);
  const onScroll = () => {
    //console.log(cardRef.current.scrollLeft);
    //console.log(cardRef.current.clientWidth);
    //console.log(cardRef.current.scrollWidth);
    let left = storiesRef.current.scrollLeft * -1;

    if (left <= 0) {
      setShowRight(false);
    } else {
      setShowRight(true);
    }
    // console.log(left);
    // console.log(storiesRef.current.scrollWidth - storiesRef.current.clientWidth);
    if ( 
      left + 2 >=
      storiesRef.current.scrollWidth - storiesRef.current.clientWidth
    ) {
      setShowLeft(false);
    } else {
      setShowLeft(true);
    }
  };
  return (
    <div className=" py-2 sm:p-2 story-container mx-auto relative">
      <div className="relative sm:w-max mx-auto h-full">
        <div
          onScroll={onScroll}
          ref={storiesRef}
          className="flex gap-4 overflow-x-scroll max-w-xl  p-2 scroll-smooth scrollbar-hide"
        >
          {storiesCollection.map((s) => (
            // console.log(s)
            <Story
              key={s.id}
              title={s.title}
              img={s.avatar}
              url={s.url}
              alt={s.alt}
              story={s.content}
            />
          ))}
        </div>
        <div className=" hidden md:flex absolute top-[50%]  right-1 z-50  ">
          <div
            onClick={() => {
              storiesRef.current.scrollLeft = storiesRef.current.scrollLeft + 150;
            }}
          >
            <div
              className={`cursor-pointer  drop-shadow-lg filter ${showRight ? 'visible' : 'invisible'} absolute right-[10%]
              `}
            >
              <FaArrowAltCircleRight className="text-4xl text-gray-300  opacity-80 hover:text-gray-500 rounded-full " />
            </div>
          </div>

          
      </div>
      <div className=" hidden md:flex absolute top-[50%] left-1 z-50  ">
          <div
            onClick={() => {
              storiesRef.current.scrollLeft = storiesRef.current.scrollLeft - 150;
            }}
          >
            <div
              className={`cursor-pointer drop-shadow-lg filter ${showLeft ? 'visible' : 'invisible'} 
              `}
            >
              <FaArrowAltCircleLeft className="text-4xl text-gray-300  opacity-80 hover:text-gray-500 rounded-full" />
            </div>
          </div>

          

          
      </div>
      </div>
    </div>
  );
};

export default Stories;
