import React from "react";

const AboutMe = () => {
  return (
    <div
      id="aboutMe"
      className="flex flex-col min-h-[calc(100vh-96px)] justify-start items-center p-2"
    >
      <h1 className="bg-blue-600 rounded-xl w-full md:w-fit h-fit text-center text-white p-5 mb-4  text-2xl font-bold">
        About Me
      </h1>

      <div className="text-white p-2 flex gap-4 flex-wrap justify-center">
        <div className=" h-fit p-2 w-1/4  min-w-[300px] min-h-[250px] max-h-[250px] overflow-auto">
          <h1 className="p-2 border-b mb-5 tracking-[5px] flex items-center">EDUCATION <span className="text-2xl">🎓</span></h1>
          <p>I am graduate of Bachelor of Science in Information Technology from Colegio De San Gabriel Arcangel Inc.</p><br></br>
          <p>With Academic Proficiency and Best in Thesis Award</p>
        </div>

        <div className=" h-fit p-2 w-2/4 min-w-[300px] min-h-[250px] max-h-[600px] overflow-auto">
          <h1 className="p-2 border-b mb-5 tracking-[5px]">EXPERIENCES <span className="text-2xl">📌</span></h1>
          <p>- When I was in college, I explored different programming languages such as java, vb.net, and PHP. I've programmed different app such as mini games using java and desktop software with database using vb.</p><br></br>

          <p>- I've built our Capstone System, a Repository for the CPRI of our School, using VB.net and received a <strong className="italic">Best in Thesis Award</strong></p><br></br>

          <p>- I have Freelance Experience where I built a Library Management System using VB.net for my client and get paid. I've solved bugs encountered by my classmates on their capstone system then I get paid.</p><br></br>

          <p>- During my OJT in House of Representatives, I've built a Web-based Bulletin System, using PHP, JS, CSS, HTML, and BOOTSTRAP for ICTS department to streamline their process of making announcements, reminders, and etc.</p>
        </div>
      
      </div>
    </div>
  );
};

export default AboutMe;
