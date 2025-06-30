import clsx from "clsx";

const DotLoader = () => {
  return (
    <div
      className={clsx(
        "flex w-full h-12 items-center justify-center gap-2 rounded-lg",
        "text-lg font-bold text-service-black",
        "md:w-auto md:px-4",
      )}
    >
      <span className="animate-bounce [animation-delay:0ms]">.</span>
      <span className="animate-bounce [animation-delay:150ms]">.</span>
      <span className="animate-bounce [animation-delay:300ms]">.</span>
    </div>
  );
};

export default DotLoader;
