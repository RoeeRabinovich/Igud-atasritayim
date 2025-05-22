import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="flex absolute top-0 left-2/4 z-0 flex-col items-center px-12 py-3 -translate-x-2/4 bg-zinc-800 translate-y-[0%] w-[1440px] max-md:px-5 max-md:max-w-full">
      <div className="flex overflow-hidden flex-wrap justify-between items-center w-full max-md:max-w-full">
        <div className="flex flex-1 shrink gap-4 items-center self-stretch my-auto basis-0 min-w-60 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecc3b4b0658db5b602bcf8dac44801463b74dcc4?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            alt="Search"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/59cef52999f480d9f98fc2d96eba09f451d4ad10?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            alt="Menu"
          />
        </div>

        <div className="flex flex-wrap gap-8 justify-center items-center self-stretch my-auto text-sm font-medium leading-tight text-center text-white min-w-60 max-md:max-w-full">
          <a href="#contact" className="self-stretch my-auto">
            צרו קשר
          </a>
          <a href="#members" className="self-stretch my-auto">
            חברי האיגוד
          </a>
          <a href="#faq" className="self-stretch my-auto">
            שאלות נפוצות
          </a>
          <a href="#save" className="self-stretch my-auto">
            שמירת יצירה
          </a>
          <a href="#info" className="self-stretch my-auto">
            מידע מקצועי
          </a>
        </div>

        <div className="flex flex-1 shrink gap-2.5 items-center self-stretch my-auto basis-0 min-w-60 max-md:max-w-full">
          <a href="/">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c0e0450735cd47bca33236064c00ecaf85abbd9?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
              className="object-contain self-stretch my-auto aspect-[1.53] w-[49px]"
              alt="Logo"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};
