import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="z-0 px-12 py-8 w-full bg-zinc-800 max-md:px-5 max-md:max-w-full">
      <div className="flex overflow-hidden gap-10 justify-center items-center w-full max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1268e6bf681c0a343c6a2ffe058ea3a3c6fee47e?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
          className="object-contain self-stretch my-auto aspect-[2.03] w-[130px]"
          alt="Logo"
        />
      </div>
      <div className="flex overflow-hidden flex-wrap justify-between items-end mt-8 w-full max-md:max-w-full">
        <p className="flex-1 shrink text-xs leading-tight text-white basis-0 max-md:max-w-full">
          @2025 כל הזכויות שמורות. איגוד התסריטאים
        </p>
        <div className="flex gap-8 justify-center items-center">
          <div className="flex overflow-hidden flex-col justify-center items-center self-stretch p-1 my-auto w-6">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/18099b96144ac4dd453902dbc138459e6f5d1f84?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
              className="object-contain aspect-square w-[18px]"
              alt="Twitter"
            />
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/468dae654d5b6efa1c7a01b0b7a86d08e2d084bd?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            alt="Facebook"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b27a5e5d1035f784b9f71f6a93052802039a2754?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            alt="Instagram"
          />
        </div>
        <a
          href="/terms"
          className="flex-1 shrink text-xs leading-tight text-right text-white underline basis-0 max-md:max-w-full"
        >
          תנאי שימוש
        </a>
      </div>
    </footer>
  );
};
