import React from "react";

interface BlogPostCardProps {
  imageUrl?: string;
  categories?: string[];
  title: string;
  date: string;
  author: string;
  singleCategory?: string;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  imageUrl,
  categories,
  title,
  date,
  author,
  singleCategory,
}) => {
  return (
    <article className="overflow-hidden bg-white rounded-xl min-h-[300px] min-w-60 shadow-[0px_8px_32px_rgba(0,0,0,0.04)] w-[300px]">
      <div className="flex flex-1 w-full bg-yellow-500 bg-opacity-20 min-h-[150px]">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="flex overflow-hidden flex-col flex-1 justify-between p-3 w-full">
        <div className="self-end pb-10 w-full max-w-[268px]">
          {singleCategory ? (
            <div className="overflow-hidden gap-4 self-stretch text-xs leading-none text-amber-500">
              {singleCategory}
            </div>
          ) : (
            <div className="flex overflow-hidden gap-4 items-center text-xs leading-none text-amber-500">
              {categories?.map((category, index) => (
                <div key={index} className="self-stretch my-auto">
                  {category}
                </div>
              ))}
            </div>
          )}
          <h3 className="mt-2 text-xl font-semibold leading-6 text-right text-black">
            {title}
          </h3>
        </div>
        <div className="flex overflow-hidden gap-10 justify-between items-center mt-2 w-full text-xs leading-none text-black">
          <div className="self-stretch my-auto">{date}</div>
          <div className="self-stretch my-auto">{author}</div>
        </div>
      </div>
    </article>
  );
};
