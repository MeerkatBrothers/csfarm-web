"use client";

import { useState } from "react";

import PrimaryButton from "@/components/atoms/button/PrimaryButton";
import Heading1 from "@/components/atoms/typography/Heading1";
import QuestionSection from "@/components/organisms/QuestionSection";

const TodayQuestionPage = () => {
  const [choiceId, setChoiceId] = useState<number | null>(null);

  return (
    <div className="space-y-10">
      <Heading1
        text={`홍길동 농부님, 
            오늘의 수확물을 타작해볼까요?`}
      />

      <QuestionSection
        question="http와 https의 차이가 뭔가요?"
        choices={[
          "http는 정보를 그대로 보내지 않고 암호화 하기 때문에 누군가 중간에서 훔쳐보거나 바꿀 수 없어요.",
          "로그인, 카드 결제처럼 중요한 정보를 보낼 땐 http가 필요해요.",
          "주소창에 🔒 자물쇠 표시가 뜨면 http예요.",
          "쉽게 말해, http는 엽서, https는 봉투에 넣은 편지라고 생각하면 돼요.",
        ]}
        choiceId={choiceId}
        onChoice={setChoiceId}
      />

      <PrimaryButton label="타작하기" disabled={choiceId === null} onClick={() => {}} />
    </div>
  );
};

export default TodayQuestionPage;
