import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="flex overflow-hidden relative z-0 flex-col px-12 py-32 w-full text-xl font-semibold leading-none text-center text-black bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4404ffe7f976e0d2d84e454e3e192bf5fe11d200?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
        className="object-cover absolute right-0 top-2/4 z-0 -translate-y-2/4 aspect-[1.87] h-[900px] translate-x-[0%] w-[1440px] max-md:max-w-full"
        alt="Background"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4404ffe7f976e0d2d84e454e3e192bf5fe11d200?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
        className="object-cover absolute right-0 top-2/4 z-0 -translate-y-2/4 aspect-[1.87] h-[900px] translate-x-[0%] w-[1440px] max-md:max-w-full"
        alt="Background overlay"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1aead1cf633b91cda1757bf75c381814d3d5a9c?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
        className="object-contain z-0 self-center max-w-full aspect-[1.41] w-[405px]"
        alt="Logo"
      />
      <div className="flex overflow-hidden z-0 flex-wrap justify-between items-center mt-32 w-full max-md:mt-10 max-md:max-w-full">
        <HeroMenuItem
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/2f977c049ce60ef5946f2ce9bfb0f5e2f1b63452?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
          text="צרו קשר"
        />
        <HeroMenuItem
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/e6787dae8b8ff9846cb142d31555c586ed1f17bc?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
          text="שאלות נפוצות"
        />
        <HeroMenuItem
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/7bb9faa226ea309dcd623b74ef5345856000c493?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
          text="שמירת יצירה"
        />
        <HeroMenuItem
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/addf7e56b921789ab76f4e911bfbae5be18f026e?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
          text="מידע מקצועי"
        />
      </div>
    </section>
  );
};

interface HeroMenuItemProps {
  iconSrc: string;
  text: string;
}

const HeroMenuItem: React.FC<HeroMenuItemProps> = ({ iconSrc, text }) => {
  return (
    <div className="flex flex-col flex-1 shrink justify-center items-center self-stretch my-auto basis-0 min-w-60">
      <img
        src={iconSrc}
        className="object-contain w-16 aspect-square"
        alt={text}
      />
      <div className="mt-4">{text}</div>
    </div>
  );
};
