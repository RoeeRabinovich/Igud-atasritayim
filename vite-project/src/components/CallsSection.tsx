"use client";
import React from "react";
import { BlogPostCard } from "./BlogPostCard";
import { Button } from "./Button";

export const CallsSection: React.FC = () => {
  return (
    <section className="flex overflow-hidden z-0 flex-col items-center px-12 py-24 w-full bg-yellow-500 max-md:px-5 max-md:max-w-full">
      <CallsForSubmissions />
      <SaveAndKeep />
    </section>
  );
};

const CallsForSubmissions: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center max-md:max-w-full">
      <h2 className="text-3xl font-semibold leading-none text-center text-black">
        קולות קוראים
      </h2>
      <div className="flex flex-col items-center mt-16 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-8 justify-center items-center max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba450e2ea33f5db66bf1005bff6b8d0b47184b62?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
            className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
            alt="Previous"
          />
          <div className="flex flex-wrap gap-10 justify-center items-end self-stretch my-auto min-w-60 max-md:max-w-full">
            <BlogPostCard
              categories={["מה חדש", "קולות קוראים"]}
              title="השקת קול קורא לרזידנסי בצרפת"
              date="07.11.24"
              author="מאת מאור גילרמן"
            />
            <BlogPostCard
              categories={["מה חדש", "קולות קוראים"]}
              title='קול קורא לתוכנית "מעבדת פיתוח" – מסינופסיס להפקה'
              date="14.11.24"
              author="מאת מאור גילרמן"
            />
            <BlogPostCard
              categories={["מה חדש", "קולות קוראים"]}
              title="מענק פוסטפרודקשן לסרטים עלילתיים ויצירה תיעודית"
              date="14.11.24"
              author="מאת מאור גילרמן"
            />
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5be8dc6843cc77d8cb1263eb97e7166c7a85a4fa?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
            className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
            alt="Next"
          />
        </div>
        <Button className="mt-8">לכל הקולות הקוראים</Button>
      </div>
    </div>
  );
};

const SaveAndKeep: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-24 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-3xl font-semibold leading-none text-center text-black">
        לגזור ולשמור ♥︎
      </h2>
      <div className="flex flex-wrap gap-8 justify-center items-center mt-16 max-md:mt-10 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba450e2ea33f5db66bf1005bff6b8d0b47184b62?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
          className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
          alt="Previous"
        />
        <div className="flex flex-wrap gap-10 justify-center items-end self-stretch my-auto min-w-60 max-md:max-w-full">
          <BlogPostCard
            singleCategory="לגזור ולשמור"
            title="השקת קול קורא לרזידנסי בצרפת"
            date="07.11.24"
            author="מאת מאור גילרמן"
          />
          <BlogPostCard
            singleCategory="לגזור ולשמור"
            title='קול קורא לתוכנית "מעבדת פיתוח" – מסינופסיס להפקה'
            date="14.11.24"
            author="מאת מאור גילרמן"
          />
          <BlogPostCard
            singleCategory="לגזור ולשמור"
            title="מענק פוסטפרודקשן לסרטים עלילתיים ויצירה תיעודית"
            date="14.11.24"
            author="מאת מאור גילרמן"
          />
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5be8dc6843cc77d8cb1263eb97e7166c7a85a4fa?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
          className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
          alt="Next"
        />
      </div>
    </div>
  );
};
