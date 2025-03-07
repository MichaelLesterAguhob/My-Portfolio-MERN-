import React, { useEffect, useState } from "react";
import MyPhoto  from "../assets/images/MyPhotoNoBg.png"

const Home = () => {
  const [typingText, setTypingText] = useState(true);
  const [text, setText] = useState("I'm Michael Lester Aguhob ");
  const textChanger = () => {
    setText((prevText) =>
      prevText === "I'm Michael Lester Aguhob "
        ? "I'm a web developer "
        : "I'm Michael Lester Aguhob "
    );
  };

  useEffect(() => {
    const timeInterval = setInterval(textChanger, 6000);
    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div
      id="home"
      className="h-[95vh] bg-gray-700 mt-[65px] p-2 flex flex-col justify-center items-center md:grid grid-flow-col grid-cols-5"
    >
      <div className="w-full md:h-2/4 md:col-span-2 flex justify-center md:justify-end items-end md:items-center p-4 overflow-hidden">
        <img src={MyPhoto} alt='Michael Photo' className="w-full h-auto max-w-[80%] max-h-full"/>
      </div>  

      <div className="w-full md:h-2/4 md:col-span-3 flex justify-center md:justify-start md:items-center  overflow-hidden">
        <div className="w-fit h-fit flex justify-start">
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-[min(6vw,50px)] md:text-[min(4vw,40px)] lg:text-[min(5vw,70px)] text-white font-bold text-center select-none p-2">
            {text} &nbsp;&nbsp;&nbsp;&nbsp;
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
