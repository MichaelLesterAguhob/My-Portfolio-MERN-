import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-gray-600 text-white p-8 grid grid-cols-4 gap-4">
      <div className="col-span-4 md:col-span-1">
        <h1 className="border-b w-[95%] font-extrabold text-xl mb-4">Social</h1>
        <ul>
          <li className="hover:cursor-pointer hover:underline">Facebook</li>
          <li className="hover:cursor-pointer hover:underline">LinkedIn</li>
          <li className="hover:cursor-pointer hover:underline">Github</li>
        </ul>
      </div>
      <div className="col-span-4 md:col-span-1">
        <h1 className="border-b w-[95%] font-extrabold text-xl mb-4">Contact</h1>
        <ul>
          <li className="hover:cursor-pointer hover:underline">Gmail</li>
          <li className="hover:cursor-pointer hover:underline">Phone</li>
          <li className="hover:cursor-pointer hover:underline">Viber</li>
        </ul>
      </div>
      <div className="col-span-4 md:col-span-2">
        <h1 className="border-b w-[95%] font-extrabold text-xl mb-4">Project Quick Links</h1>
        <ul>
          <li className="hover:cursor-pointer hover:underline">Web-based Bulletin</li>
          <li className="hover:cursor-pointer hover:underline">CPRI Repository System</li>
          <li className="hover:cursor-pointer hover:underline">Library Management System</li>
          <li className="hover:cursor-pointer hover:underline">Milk Tea POS</li>
          <li className="hover:cursor-pointer hover:underline">Fast Food POS</li>
        </ul>
      </div>

      <div className="col-span-4 mt-8">
        <img src="./favicon-32x32.png" alt="logo" className="w-[30px] h-[30px]"/>
        <p>Copyright © 2025 | Michael Lester Aguhob</p>
      </div>
      
    </div>
  );
};

export default Footer;
