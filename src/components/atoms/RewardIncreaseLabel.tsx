import Seed from "@/../public/svgs/seed.svg";

import Caption2 from "@/components/atoms/typography/Caption2";

const RewardIncreaseLabel = () => {
  return (
    <div className="flex items-center">
      <Seed width={18} />

      <Caption2 text=" + 1" />
    </div>
  );
};

export default RewardIncreaseLabel;
