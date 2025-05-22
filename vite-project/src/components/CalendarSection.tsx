import React from "react";
import { Button } from "./Button";

export const CalendarSection: React.FC = () => {
  return (
    <section className="flex relative z-0 flex-col items-center px-12 pt-40 pb-24 w-full leading-none text-center bg-yellow-500 max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <div className="flex absolute -top-12 left-2/4 z-0 flex-row gap-10 justify-center items-center self-stretch w-full text-3xl font-semibold -translate-x-2/4 translate-y-[0%] max-md:max-w-full">
        <Button
          variant="secondary"
          className="px-10 py-6 text-3xl min-w-60 max-md:px-5"
        >
          לכל חברי האיגוד
        </Button>
        <Button
          variant="outline"
          className="px-12 py-6 text-3xl min-w-60 max-md:px-5"
        >
          להצטרפות לאיגוד
        </Button>
      </div>

      <div className="flex z-0 flex-col items-center text-black max-md:max-w-full">
        <div className="flex flex-col justify-center items-center max-md:max-w-full">
          <h2 className="text-3xl font-semibold">הישארו מעודכנים</h2>
          <p className="mt-6 text-2xl max-md:max-w-full">
            לחצו על הלוח להוספת יומן אירועי האיגוד ליומן הפרטי:
          </p>
        </div>
      </div>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/28724d040a41b85a5b0a40d99d3c610d835113a6?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
        className="object-contain z-0 mt-16 max-w-full aspect-[1.5] w-[605px] max-md:mt-10"
        alt="Calendar"
      />
    </section>
  );
};
