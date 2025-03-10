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
      id="hero"
      className="min-h-[95vh] mt-[65px] p-2 flex flex-col justify-center items-center md:grid grid-flow-col grid-cols-5"
    >
      <div className="w-full md:h-2/4 md:col-span-2 flex justify-center md:justify-end items-end md:items-center p-4 overflow-hidden">
        <img src={MyPhoto} alt='Michael Photo' className="w-full h-auto max-w-[340px] max-h-[340px]"/>
      </div>  

      <div className="w-full md:h-2/4 md:col-span-3 flex flex-col justify-center  md:items-center overflow-hidden">
        <div className="w-full h-fit flex justify-start">
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-[min(6vw,50px)] md:text-[min(4vw,40px)] lg:text-[min(4vw,50px)] text-white font-bold text-start select-none p-2 ">
            {text} &nbsp;
          </h1>
        </div>
        <p className="w-full p-2 text-white text-2xl text-justify">Hi👋 I'm Michael and I am desktop software and web developer and <strong>I'm open for an entry level job.</strong> I love coding, building a software or website that let me turned ideas into reality.</p>
      </div>
    </div>
  );
};

export default Home;
