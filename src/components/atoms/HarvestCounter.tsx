import Seed from "@/../public/svgs/seed.svg";

import Caption2 from "@/components/atoms/typography/Caption2";

interface HarvestCounterProps {
  harvestCount: number;
}

const HarvestCounter = ({ harvestCount }: HarvestCounterProps) => {
  return (
    <div className="flex items-center">
      <Seed width={18} />

      <Caption2 text={` X ${harvestCount}`} />
    </div>
  );
};

export default HarvestCounter;
