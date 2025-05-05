import Heading1 from "@/components/atoms/typography/Heading1";
import InsightSection from "@/components/organisms/InsightSection";
import SubInsightList from "@/components/organisms/SubInsightList";

const TodayInsightPage = () => {
  return (
    <div className="space-y-10">
      <Heading1
        text={`안녕하세요, 홍길동 농부님👋
            오늘은 어떤 지식을 수확해볼까요?`}
      />

      <div className="flex flex-col space-y-20">
        <InsightSection
          subject="http와 https의 차이가 뭔가요?"
          description={`http와 https는 웹사이트에 접속할 때 쓰는 약속이에요. 
            http 정보를 그대로 보내기 때문에 누군가 중간에서 훔쳐보거나 바꿀 수 있어요.

            반면 http는 정보를 잠금(암호화) 해서 보내요. 그래서 중간에 누가 보더라도 내용을 알 수 없어요. 
            로그인, 카드 결제처럼 중요한 정보를 보낼 땐 http가 꼭 필요해요. 
            주소창에 🔒 자물쇠 표시가 뜨면 https예요. 

            쉽게 말해, http는 엽서, https는 봉투에 넣은 편지라고 생각하면 돼요.`}
        />

        <SubInsightList />
      </div>
    </div>
  );
};

export default TodayInsightPage;
