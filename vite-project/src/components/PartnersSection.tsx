import React from "react";

export const PartnersSection: React.FC = () => {
  return (
    <section className="flex z-0 flex-col px-12 py-24 w-full bg-amber-500 max-md:px-5 max-md:max-w-full">
      <h2 className="self-center text-3xl font-semibold leading-none text-center text-white">
        בשותפות ובחסות
      </h2>
      <div className="flex overflow-hidden flex-wrap gap-10 justify-center items-center mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7143d3f2159323f343479c8b31671799af7ab99b?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
          className="object-contain shrink-0 self-stretch my-auto w-40 aspect-square"
          alt="Partner logo"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/57e4970941873ef1f1fbcdaf1ae0a6683011cce3?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
          className="object-contain shrink-0 self-stretch my-auto w-40 aspect-square"
          alt="Partner logo"
        />
      </div>
    </section>
  );
};
