import React from "react";
import { Button } from "./Button";

export const SaveCreationSection: React.FC = () => {
  return (
    <section className="flex z-0 flex-col items-center px-12 py-24 w-full text-center bg-amber-500 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center items-center max-w-full text-white w-[586px]">
        <h2 className="text-3xl font-semibold leading-none">שמירת יצירה</h2>
        <p className="mt-6 text-2xl leading-7 max-md:max-w-full">
          שמירת היצירה באיגוד התסריטאים מעניקה לכם ראייה מסייעת לבעלותכם על
          היצירה. היצירה נשמרת בארכיון הדיגיטלי של האיגוד למשך חמש שנים.
        </p>
        <p className="mt-6 text-base leading-tight max-md:max-w-full">
          לשאלות נוספות:{" "}
          <a href="mailto:writers@writersguild.org.il" className="underline">
            writers@writersguild.org.il
          </a>
        </p>
      </div>

      <div className="flex overflow-hidden flex-wrap justify-between self-stretch mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <SaveStep
          number="3"
          title="תשלום"
          description="לאחר ביצוע התשלום, נבצע את שמירתכם ותקבלו חזרה למייל אישור על השמירה וקבלה."
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/776fa1bc053d91478da85e84e1281bb603355179?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
        />

        <div className="flex shrink-0 w-px bg-white bg-opacity-70 h-[242px]" />

        <SaveStep
          number="2"
          title="שליחת יצירה"
          description="שולחים אלינו את היצירה + הטפסים החתומים."
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/09e99539fe9100f3be25799a63aacad0a52e67fe?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
        />

        <div className="flex shrink-0 w-px bg-white bg-opacity-70 h-[242px]" />

        <SaveStep
          number="1"
          title="מילוי טפסים"
          description="מורידים את הטפסים מהאתר ממלאים וחותמים."
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/145303ca79cfc8c19eb8d880716112c72d71d777?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
        />
      </div>

      <Button variant="secondary" className="mt-16 max-md:mt-10">
        לשמירה
      </Button>
    </section>
  );
};

interface SaveStepProps {
  number: string;
  title: string;
  description: string;
  iconSrc: string;
}

const SaveStep: React.FC<SaveStepProps> = ({
  number,
  title,
  description,
  iconSrc,
}) => {
  return (
    <div className="flex flex-col flex-1 shrink items-center basis-0 min-w-60 max-md:max-w-full">
      <div className="text-2xl font-semibold leading-none text-white">
        {number}
      </div>
      <div className="flex flex-col items-center mt-8 max-w-full text-white w-[340px]">
        <img
          src={iconSrc}
          className="object-contain w-24 aspect-square"
          alt={title}
        />
        <h3 className="mt-4 text-xl font-semibold leading-none">{title}</h3>
        <p className="mt-4 text-base leading-5">{description}</p>
      </div>
    </div>
  );
};
