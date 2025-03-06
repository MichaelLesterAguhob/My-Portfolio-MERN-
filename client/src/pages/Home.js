import React, { useEffect, useState } from "react";

const Home = () => {
  const [typingText, setTypingText] = useState(true);
  const [text, setText] = useState("Hi!🙂 I'm Michael Lester Aguhob ");
  const textChanger = () => {
    setText((prevText) =>
      prevText === "Hi!🙂 I'm Michael Lester Aguhob "
        ? "I'm a web developer "
        : "Hi!🙂 I'm Michael Lester Aguhob "
    );
  };

  useEffect(() => {
    const timeInterval = setInterval(textChanger, 6000);
    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div
      id="home"
      className="h-[95vh] bg-gray-500 mt-[62px] p-2 flex flex-col justify-center  items-center md:grid grid-flow-col grid-cols-5"
    >
      <div className="bg-orange-400 w-full h-1/3 md:h-3/4 col-span-2 flex justify-center items-center">
        <h1>My Photo</h1>
      </div>  

      <div className="bg-red-400 w-full h-1/3 md:h-3/4 col-span-3 flex justify-center items-center">
        <div className="w-fit flex justify-center border">
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-lg md:text-2xl text-white font-bold text-center select-none p-2">
            {text} &nbsp;&nbsp;&nbsp;&nbsp;
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
