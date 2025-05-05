import SubInsightSection from "@/components/organisms/SubInsightSection";

const SubInsightList = () => {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: 2 }).map((_, index) => (
        <SubInsightSection
          key={index}
          subject="프로토콜이 뭔가요?"
          description={`프로토콜은 컴퓨터나 인터넷에서 정보를 주고받을 때 지켜야 하는 약속이나 규칙이에요.
                  예를 들어, 우리가 대화할 때도 서로 말을 주고받는 순서와 방식이 있잖아요?
                  컴퓨터도 마찬가지로, 서로 어떤 언어로, 어떤 순서로, 어떻게 데이터를 주고받을지를 정해놓은 규칙이 필요한데, 이걸 프로토콜이라고 해요.

                  📦 http는 웹페이지를 주고받을 때 쓰는 대표적인 프로토콜이고,
                  📞 smtp는 이메일을 보낼 때,
                  💬 WebSocket은 실시간 채팅을 할 때 쓰는 프로토콜이에요.

                  쉽게 말해, 컴퓨터끼리 소통할 수 있게 도와주는 언어의 규칙이에요!`}
        />
      ))}
    </div>
  );
};

export default SubInsightList;
