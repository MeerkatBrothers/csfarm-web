"use client";

import { useRouter, usePathname } from "next/navigation";

import NavLinker from "@/components/atoms/NavLinker";
import useAuthAction from "@/domains/auth/hooks/useAuthAction";

interface NavLinkerSectionProps {
  onLinkerClick?: () => void;
}

const NavLinkerSection = ({ onLinkerClick }: NavLinkerSectionProps) => {
  const router = useRouter();

  const pathname: string = usePathname();

  const toTodayQuiz = useAuthAction({
    action: () => handleClick("/quiz/today"),
  });

  const handleClick = (to: string): void => {
    onLinkerClick?.();

    router.push(to);
  };

  return (
    <div className="flex flex-col w-full">
      <NavLinker label="오늘의 수확" isActive={pathname === "/insight/today"} onClick={() => handleClick("/insight/today")} />
      <NavLinker label="오늘의 타작" isActive={pathname === "/quiz/today"} onClick={toTodayQuiz} />
      <NavLinker label="수확물 창고" isActive={pathname === "/insight/storage"} onClick={() => handleClick("/insight/storage")} />
    </div>
  );
};

export default NavLinkerSection;
