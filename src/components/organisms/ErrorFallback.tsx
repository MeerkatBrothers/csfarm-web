'use client';

import Image from 'next/image';

import Heading from '@/components/atoms/typography/Heading';

const ErrorFallback = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 p-10 text-center">
      <Image src="/images/farmer_sad.png" width={200} height={200} priority alt="error" />

      <Heading text={`앗! 문제가 발생했어요.\n\n잠시 후 다시 시도해 주세요.`} scale={1} />
    </div>
  );
};

export default ErrorFallback;
