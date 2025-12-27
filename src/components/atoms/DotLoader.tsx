import { cn } from '@/shared/utils/cn';

const DotLoader = () => {
  return (
    <div
      className={cn(
        'flex h-12 w-full items-center justify-center gap-2 rounded-lg text-lg font-bold text-black',
        'md:w-auto md:px-4',
      )}
    >
      <span className="animate-bounce [animation-delay:0ms]">.</span>
      <span className="animate-bounce [animation-delay:150ms]">.</span>
      <span className="animate-bounce [animation-delay:300ms]">.</span>
    </div>
  );
};

export default DotLoader;
