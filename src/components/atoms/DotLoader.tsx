"use client";

import clsx from "clsx";

const DotLoader = () => {
  return (
    <div
      className={clsx(
        "flex items-center justify-center gap-2",
        "w-full md:w-auto",
        "h-12",
        "md:px-4",
        "rounded-lg",
        "text-lg",
        "font-bold",
        "text-service-black",
      )}
    >
      <span className="animate-bounce [animation-delay:0ms]">.</span>
      <span className="animate-bounce [animation-delay:150ms]">.</span>
      <span className="animate-bounce [animation-delay:300ms]">.</span>
    </div>
  );
};

export default DotLoader;
