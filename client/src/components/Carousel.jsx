import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({ children: photos }) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? photos.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === photos.length - 1 ? 0 : curr + 1));

useEffect(() => {
  console.log(photos)
}, [photos])

  return (
    <div className="w-full md:max-w-[420px] overflow-hidden relative flex">
      <div
        className="w-full flex ease-out duration-500 h-full"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {photos}
      </div>
      <div className="absolute inset-0 z-10 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>
      <div className="indicators absolute inset-5 flex justify-center items-end gap-2">
          {
            photos.map((_, i) => (
              <div key={i} className={`transition-all rounded-full w-3 h-3 bg-white ${curr === i ? "p-2" : "opacity-50"}`}></div>
            ))
          }
      </div>
    </div>
  );
};

export default Carousel;
