import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-650 text-white p-8 grid grid-cols-4 gap-4">
      <div className="col-span-4 md:col-span-1">
        <h1 className="border-b w-[95%] font-extrabold text-xl mb-4">Social</h1>
        <ul className="leading-relaxed">
          <li className="hover:cursor-pointer hover:underline">
            <a
              href="https://www.facebook.com/mikellester.cabalq"
              target="_blank"
              className="flex justify-start items-center gap-2"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
                className="w-6"
              />
              Facebook
            </a>
          </li>
          <li className="hover:cursor-pointer hover:underline">
            <a
              href="https://www.linkedin.com/in/aguhob-michael-lester-741055261/"
              target="_blank"
              className="flex justify-start items-center gap-2"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/016/716/470/non_2x/linkedin-icon-free-png.png"
                className="w-6"
              />
              LinkedIn
            </a>
          </li>
          <li className="hover:cursor-pointer hover:underline">
            <a
              href="https://github.com/MichaelLesterAguhob"
              target="_blank"
              className="flex justify-start items-center gap-2"
            >
              <img
                src="http://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
                className="w-6"
              />
              Github
            </a>
          </li>
        </ul>
      </div>
      <div id="contact" className="col-span-4 md:col-span-1">
        <h1 className="border-b w-[95%] font-extrabold text-xl mb-4">
          Contact
        </h1>
        <ul className="leading-relaxed">
          <li className="hover:cursor-pointer hover:underline">
            <a
              href="mailto:michaellesteraguhob023@gmail.com"
              target="_blank"
              className="flex justify-start items-center gap-2"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/022/484/508/non_2x/google-mail-gmail-icon-logo-symbol-free-png.png"
                className="w-6"
              />
              Email
            </a>
          </li>
          <li className="hover:cursor-pointer hover:underline">
            <a
              href="tel:+639381639890"
              className="flex justify-start items-center gap-2"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_icon.png"
                className="w-6"
              />
              Phone
            </a>
          </li>
          <li className="hover:cursor-pointer hover:underline">
            <a
              href="viber://chat?number=09381639890"
              target="_blank"
              className="flex justify-start items-center gap-2"
            >
              <img
                src="https://seeklogo.com/images/R/rakuten-viber-logo-57D37D4D48-seeklogo.com.png"
                className="w-6"
              />
              Viber
            </a>
          </li>
        </ul>
      </div>
      <div className="col-span-4 md:col-span-2">
        <h1 className="border-b w-[95%] font-extrabold text-xl mb-4">
          Project Quick Links
        </h1>
        <ul className="leading-relaxed">
          <li className="hover:cursor-pointer hover:underline">
            Web-based Bulletin
          </li>
          <li className="hover:cursor-pointer hover:underline">
            CPRI Repository System
          </li>
          <li className="hover:cursor-pointer hover:underline">
            Library Management System
          </li>
          <li className="hover:cursor-pointer hover:underline">Milk Tea POS</li>
          <li className="hover:cursor-pointer hover:underline">
            Fast Food POS
          </li>
        </ul>
      </div>

      <div className="col-span-4 mt-8">
        <img
          src="./favicon-32x32.png"
          alt="logo"
          className="w-[30px] h-[30px]"
        />
        <p>Copyright © 2025 | Michael Lester Aguhob</p>
      </div>
    </div>
  );
};

export default Footer;
