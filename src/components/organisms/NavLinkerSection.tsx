"use client";

import { useRouter, usePathname } from "next/navigation";
import clsx from "clsx";

import useAuthAction from "@/domains/auth/hooks/useAuthAction";

import NavLinker from "@/components/atoms/NavLinker";

interface NavLinkerSectionProps {
  onLinkerClick?: () => void;
}

const NavLinkerSection = ({ onLinkerClick }: NavLinkerSectionProps) => {
  const router = useRouter();

  const pathname: string = usePathname();

  const navigateTo = (to: string): void => {
    onLinkerClick?.();

    router.push(to);
  };

  const toTodayQuiz = useAuthAction({
    action: () => navigateTo("/quiz/today"),
  });

  const toMyProfile = useAuthAction({
    action: () => navigateTo("/profile/my"),
  });

  return (
    <div className={clsx("flex flex-col items-center gap-8", "md:flex-row")}>
      <NavLinker label="오늘의 수확" isActive={pathname === "/insight/today"} onClick={() => navigateTo("/insight/today")} />

      <NavLinker label="오늘의 타작" isActive={pathname === "/quiz/today"} onClick={toTodayQuiz} />

      <NavLinker label="수확물 창고" isActive={pathname === "/insight/storage"} onClick={() => navigateTo("/insight/storage")} />

      <div className={clsx("md:hidden")}>
        <NavLinker label="마이페이지" isActive={pathname === "/profile/my"} onClick={toMyProfile} />
      </div>
    </div>
  );
};

export default NavLinkerSection;
