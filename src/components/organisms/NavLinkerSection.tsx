"use client";

import { useRouter, usePathname } from "next/navigation";
import clsx from "clsx";

import useIsLogin from "@/domains/auth/hooks/useIsLogin";
import useAuthAction from "@/domains/auth/hooks/useAuthAction";

import NavLinker from "@/components/atoms/NavLinker";

interface NavLinkerSectionProps {
  onLinkerClick?: () => void;
}

const NavLinkerSection = ({ onLinkerClick }: NavLinkerSectionProps) => {
  const router = useRouter();

  const pathname: string = usePathname();

  const { isLogin } = useIsLogin();

  const navigateTo = (to: string): void => {
    onLinkerClick?.();

    router.push(to);
  };

  const toTodayQuiz = useAuthAction({
    action: () => navigateTo("/quiz/today"),
  });

  return (
    <div className={clsx("flex flex-col items-center gap-8", "md:flex-row")}>
      <NavLinker label="오늘의 수확" isActive={pathname === "/insight/today"} onClick={() => navigateTo("/insight/today")} />

      <NavLinker label="오늘의 타작" isActive={pathname === "/quiz/today"} onClick={toTodayQuiz} />

      <NavLinker label="수확물 창고" isActive={pathname === "/insight/storage"} onClick={() => navigateTo("/insight/storage")} />

      {isLogin && (
        <div className="md:hidden">
          <NavLinker label="마이페이지" isActive={pathname === "/profile/my"} onClick={() => navigateTo("/profile/my")} />
        </div>
      )}
    </div>
  );
};

export default NavLinkerSection;
