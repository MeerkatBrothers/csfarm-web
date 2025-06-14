"use client";

import { useRouter } from "next/navigation";

import useSignOut from "@/domains/auth/hooks/useSignOut";

import Label1 from "@/components/atoms/typography/Label1";
import Caption1 from "@/components/atoms/typography/Caption1";

const MemberMenuCard = () => {
  const router = useRouter();

  const { mutate: signOut } = useSignOut({
    onSuccess: () => router.replace("/"),
  });

  return (
    <div className="flex flex-col items-center w-32 p-6 gap-6 rounded-2xl border-2 border-gray-100 bg-white">
      <button onClick={() => router.push("/profile/my")}>
        <Label1 text="마이페이지" styles={{ weight: "font-medium" }} />
      </button>

      <button onClick={() => signOut()}>
        <Label1 text="로그아웃" styles={{ weight: "font-medium" }} />
      </button>

      <button>
        <Caption1 text="회원탈퇴" styles={{ color: "text-gray-400" }} />
      </button>
    </div>
  );
};

export default MemberMenuCard;
