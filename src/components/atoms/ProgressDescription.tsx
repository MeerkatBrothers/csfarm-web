import clsx from "clsx";

import Caption1 from "@/components/atoms/typography/Caption1";

interface ProgressDescriptionProps {
  description: string;
  color: string;
}

const ProgressDescription = ({ description, color }: ProgressDescriptionProps) => {
  return (
    <div className="flex gap-1">
      <div className={clsx("w-4 h-4", color)} />

      <Caption1 text={description} />
    </div>
  );
};

export default ProgressDescription;
