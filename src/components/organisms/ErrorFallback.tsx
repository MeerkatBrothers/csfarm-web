"use client";

import Image from "next/image";

import { FallbackProps } from "react-error-boundary";

import Heading1 from "@/components/atoms/typography/Heading1";

const ErrorFallback = ({ error }: FallbackProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-10 gap-10">
      <Image src="/images/farmer_sad.png" width={200} height={200} priority alt="error" />

      <Heading1 text={`앗! 문제가 발생했어요.\n\n잠시 후 다시 시도해 주세요.`} />
    </div>
  );
};

export default ErrorFallback;
