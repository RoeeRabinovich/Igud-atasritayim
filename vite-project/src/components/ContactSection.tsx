import React from "react";

export const ContactSection: React.FC = () => {
  return (
    <section className="flex overflow-hidden relative z-0 flex-col px-12 py-24 w-full bg-white max-md:px-5 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0110516f8fc7c50bf8c7990c359d4c10091cfdf9?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
        className="object-contain absolute right-0 top-2/4 z-0 -translate-y-2/4 aspect-[1.81] h-[900px] translate-x-[0%] w-[1440px] max-md:max-w-full"
        alt="Background"
      />

      <div className="flex z-0 flex-col justify-center items-center self-center max-w-full text-center text-black w-[586px]">
        <h2 className="text-3xl font-semibold leading-none">צרו קשר</h2>
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

      <div className="flex z-0 flex-wrap justify-between items-center mt-16 w-full text-center text-black max-md:mt-10 max-md:max-w-full">
        <TeamMember
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/933c9a4f4d0b3bdadff7f3ee40dc99affff83a4c?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
          name="מאור גילרמן"
          role="תוכן ומדיה חברתית"
          emailIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/8375218f7d2dbfc2b4c983351b49fdf66af39ea2?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
        />
        <TeamMember
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/64baee52865cf5294568d3df16924b79e621dc47?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
          name="ליאור תמאם"
          role='אחראי היצירה המקורית, עו"ד'
          emailIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/8375218f7d2dbfc2b4c983351b49fdf66af39ea2?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
        />
        <TeamMember
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/3b282cb9ae26bd4ea80453947577f42f31f99a2d?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
          name="שירה ברוך"
          role="פרויקטים וקשרי חברים"
          emailIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/8375218f7d2dbfc2b4c983351b49fdf66af39ea2?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
        />
        <TeamMember
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/fd4b780484b2a8805009b15fb5ae50d4dd652d22?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
          name="מעיין טל"
          role="פרויקטים וקשרי חברים"
          emailIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/8375218f7d2dbfc2b4c983351b49fdf66af39ea2?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
        />
      </div>

      <div className="flex overflow-hidden z-0 flex-wrap gap-10 justify-center items-start self-center mt-16 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col justify-center items-center text-xs leading-none text-center text-black">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/602c4342b3702691923bb07d3f16edb7d68fd95b?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
            className="object-contain w-5 aspect-square"
            alt="Location"
          />
          <div className="mt-2">שד' דוד המלך 1 תל אביב, קומה 4</div>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6d3eac5502a2a725be62dbaca01dfd3737b126e?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            alt="Social media"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5108151ba95ebd1f252ed7cddf3878107d8c06a8?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            alt="Social media"
          />
        </div>

        <div className="flex flex-col justify-center items-center text-xs leading-none text-center text-black underline">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/426c3ebf62e0bf59b8392a3a690ea6c471473e2b?placeholderIfAbsent=true&apiKey=dddd247b16d44f4b820c443e26627479"
            className="object-contain w-5 aspect-square"
            alt="Payment"
          />
          <div className="mt-2">לעדכון אמצעי התשלום לחברות באיגוד</div>
        </div>
      </div>
    </section>
  );
};

interface TeamMemberProps {
  imageSrc: string;
  name: string;
  role: string;
  emailIconSrc: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  imageSrc,
  name,
  role,
  emailIconSrc,
}) => {
  return (
    <div className="flex flex-col flex-1 shrink items-center self-stretch my-auto basis-0 min-w-60">
      <img
        src={imageSrc}
        className="object-contain w-32 max-w-full aspect-square rounded-[267px] shadow-[-4px_4px_0px_rgba(244,193,7,1)]"
        alt={name}
      />
      <h3 className="mt-4 text-xl font-semibold leading-none">{name}</h3>
      <p className="mt-4 text-base leading-tight">{role}</p>
      <a href={`mailto:${name.replace(/\s/g, ".")}@writersguild.org.il`}>
        <img
          src={emailIconSrc}
          className="object-contain mt-4 w-8 aspect-square"
          alt="Email"
        />
      </a>
    </div>
  );
};
