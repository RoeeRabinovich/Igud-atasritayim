"use client";
import React, { useState } from "react";
import { BlogPostCard } from "./BlogPostCard";
import { Button } from "./Button";

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing email:", email);
    // Reset form
    setEmail("");
  };

  return (
    <section className="flex z-0 flex-col justify-center items-center px-12 py-24 w-full bg-yellow-500 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[300px]">
        <div className="flex flex-col self-center w-full leading-none text-center">
          <h2 className="self-center text-3xl font-semibold text-black">
            הירשמו לניוזלטר
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center mt-16 text-base whitespace-nowrap max-md:mt-10"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="אימייל"
              className="overflow-hidden px-5 py-3 w-full text-black bg-white rounded-[100px]"
              required
            />
            <button
              type="submit"
              className="overflow-hidden px-5 py-3 mt-2 w-full font-semibold text-white bg-amber-500 rounded-[100px]"
            >
              להרשמה
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-center mt-16 w-full max-md:mt-10">
          <p className="self-center text-base leading-tight text-center text-black max-md:max-w-full">
            האיגרת העדכנית ביותר!
          </p>
          <div className="mt-4">
            <BlogPostCard
              singleCategory="ניוזלטר"
              title="איגרת איגוד התסריטאים/ות לחברים/ות 14/11/24"
              date="14.11.24"
              author="מאת מאור גילרמן"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
