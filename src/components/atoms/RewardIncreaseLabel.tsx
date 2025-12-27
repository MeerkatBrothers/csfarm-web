import Seed from '@/assets/svgs/seed.svg';

import Caption from '@/components/atoms/typography/Caption';

const RewardIncreaseLabel = () => {
  return (
    <div className="flex items-center">
      <Seed width={18} />

      <Caption text=" + 1" scale={1} />
    </div>
  );
};

export default RewardIncreaseLabel;
