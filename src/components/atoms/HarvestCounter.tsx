import Seed from '@/../public/svgs/seed.svg';

import Caption from '@/components/atoms/typography/Caption';

interface HarvestCounterProps {
  harvestCount: number;
}

const HarvestCounter = ({ harvestCount }: HarvestCounterProps) => {
  return (
    <div className="flex items-center">
      <Seed width={18} />

      <Caption text={` X ${harvestCount}`} scale={2} />
    </div>
  );
};

export default HarvestCounter;
