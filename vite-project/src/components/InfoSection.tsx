import React from "react";
import { BlogPostCard } from "./BlogPostCard";
import { Button } from "./Button";

export const InfoSection: React.FC = () => {
  return (
    <section className="flex overflow-hidden z-0 flex-col items-center px-12 pt-24 pb-48 w-full bg-amber-500 max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-col justify-center items-center max-md:max-w-full">
        <h2 className="text-3xl font-semibold leading-none text-white">
          מידע מקצועי
        </h2>
        <div className="flex flex-wrap gap-10 justify-center items-center mt-16 max-md:mt-10 max-md:max-w-full">
          <InfoColumn
            title="אירועים וסדנאות"
            buttonText="לכל האירועים והסדנאות"
          />

          <div className="flex shrink-0 self-stretch w-px bg-white bg-opacity-70 h-[752px]" />

          <InfoColumn title="כלים שימושיים" buttonText="לכל הכלים השימושיים" />

          <div className="flex shrink-0 self-stretch w-px bg-white bg-opacity-70 h-[752px]" />

          <InfoColumn title="מה חדש" buttonText="לכל החדשות" />
        </div>
      </div>
    </section>
  );
};

interface InfoColumnProps {
  title: string;
  buttonText: string;
}

const InfoColumn: React.FC<InfoColumnProps> = ({ title, buttonText }) => {
  return (
    <div className="flex flex-col items-center self-stretch my-auto min-w-60 w-[300px]">
      <h3 className="text-2xl font-semibold leading-none text-center text-white">
        {title}
      </h3>
      <div className="flex flex-col justify-center items-center mt-8 max-w-full w-[300px]">
        <BlogPostCard
          categories={["מה חדש", "קולות קוראים"]}
          title="השקת קול קורא לרזידנסי בצרפת"
          date="07.11.24"
          author="מאת מאור גילרמן"
        />
        <div className="mt-6">
          <BlogPostCard
            categories={["מה חדש", "קולות קוראים"]}
            title='קול קורא לתוכנית "מעבדת פיתוח" – מסינופסיס להפקה'
            date="14.11.24"
            author="מאת מאור גילרמן"
          />
        </div>
      </div>
      <Button variant="secondary" className="mt-8">
        {buttonText}
      </Button>
    </div>
  );
};
