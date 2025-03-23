import React from "react";

const AboutMe = () => {
  return (
    <div
      id="aboutMe"
      className="flex flex-col min-h-[calc(100vh-96px)] justify-start items-center p-2"
    >
      <h1 className="bg-blue-600 rounded-xl w-full md:w-fit h-fit text-center text-white p-3 mb-4  text-2xl font-bold">
        About Me
      </h1>

      <div className="text-white p-2 flex gap-4 flex-wrap justify-center">
        <div className=" h-fit p-2 w-1/4  min-w-[300px] min-h-[250px] max-h-[700px] overflow-auto">
          <h1 className="p-2 border-b mb-5 tracking-[5px] flex items-center">EDUCATION <span className="text-2xl">🎓</span></h1>
          <p>👨‍🎓 I am graduate of Bachelor of Science in Information Technology from Colegio De San Gabriel Arcangel Inc. Graduated with Academic Proficiency and Best in Thesis Award</p><br></br>

          <p>💻 I have finished an intensive Coding Bootcamp at ZUITT with a course package of MERN Stack and I graduated as Full Stack Web Developer.</p> <br />

          <h3>BOOTCAMP CERTIFICATES📄</h3>
          <a href="https://share.zertify.zuitt.co/certificate/18aa4ed2-4188-4945-836a-fb6fda660c93/" target="_blank" className="text-blue-500 hover:underline">Front End Course</a> <br />
          <a href="https://share.zertify.zuitt.co/certificate/32925616-94c3-44bb-9c20-067ab555bcc9/" target="_blank" className="text-blue-500 hover:underline">Back End Course</a><br />
          <a href="#" className="text-blue-500 hover:underline">Full-Stack - On Process</a>
        </div>

        <div className=" h-fit p-2 w-2/4 min-w-[300px] min-h-[250px] ">
          <h1 className="p-2 border-b mb-5 tracking-[5px]">EXPERIENCES <span className="text-2xl">📌</span></h1>
          <p>💻 When I was in college, I explored different programming languages such as java, vb.net, and PHP. I've programmed different app such as mini games using java and desktop software with database using vb.</p><br></br>

          <p>💻 I've built our Capstone System, a Repository for the CPRI of our School, using VB.net and received a <strong className="italic">Best in Thesis Award</strong></p><br></br>

          <p>💻 I have Freelance Experience where I built a Library Management System using VB.net for my client and get paid. I've also solved bugs encountered by my classmates on their capstone system then I get paid.</p><br></br>

          <p>💻 During my OJT at House of Representatives, I've built a Web-based Bulletin System using PHP, JS, CSS, HTML, and BOOTSTRAP for ICTS department to streamline their process of making announcements, reminders, and etc.</p>
        </div>
      
      </div>
    </div>
  );
};

export default AboutMe;
