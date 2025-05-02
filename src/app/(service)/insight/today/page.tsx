import Heading1 from "@/components/atoms/typography/Heading1";
import InsightGroup from "@/components/molecules/InsightGroup";
import SubInsightGroup from "@/components/molecules/SubInsightGroup";

const TodayInsightPage = () => {
  return (
    <div className="space-y-10">
      <Heading1
        text={`안녕하세요, 홍길동 농부님👋
            오늘은 어떤 지식을 수확해볼까요?`}
      />

      <div className="flex flex-col space-y-20">
        <InsightGroup
          subject="http와 https의 차이가 뭔가요?"
          description={`http와 https는 웹사이트에 접속할 때 쓰는 약속이에요. 
            http 정보를 그대로 보내기 때문에 누군가 중간에서 훔쳐보거나 바꿀 수 있어요.

            반면 http는 정보를 잠금(암호화) 해서 보내요. 그래서 중간에 누가 보더라도 내용을 알 수 없어요. 
            로그인, 카드 결제처럼 중요한 정보를 보낼 땐 http가 꼭 필요해요. 
            주소창에 🔒 자물쇠 표시가 뜨면 https예요. 

            쉽게 말해, http는 엽서, https는 봉투에 넣은 편지라고 생각하면 돼요.`}
        />

        <SubInsightGroup
          subject="프로토콜이 뭔가요?"
          description={`프로토콜은 컴퓨터나 인터넷에서 정보를 주고받을 때 지켜야 하는 약속이나 규칙이에요.
                    예를 들어, 우리가 대화할 때도 서로 말을 주고받는 순서와 방식이 있잖아요?
                    컴퓨터도 마찬가지로, 서로 어떤 언어로, 어떤 순서로, 어떻게 데이터를 주고받을지를 정해놓은 규칙이 필요한데, 이걸 프로토콜이라고 해요.

                    📦 http는 웹페이지를 주고받을 때 쓰는 대표적인 프로토콜이고,
                    📞 smtp는 이메일을 보낼 때,
                    💬 WebSocket은 실시간 채팅을 할 때 쓰는 프로토콜이에요.

                    쉽게 말해, 컴퓨터끼리 소통할 수 있게 도와주는 언어의 규칙이에요!`}
        />
      </div>
    </div>
  );
};

export default TodayInsightPage;
