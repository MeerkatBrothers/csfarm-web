import clsx from "clsx";

import { formatDateToYMD } from "@/lib/utils/formatter/date";

import { Progress } from "@/domains/progress/models/fragments/progress";

interface ProgressCellProps {
  date: Date;
  progress?: Progress;
}

const ProgressCell = ({ date, progress }: ProgressCellProps) => {
  const color: string = progress?.isThreshed ? "bg-primary-500" : progress?.isHarvested ? "bg-secondary-500" : "bg-gray-100";

  return <td className={clsx("w-4 h-4", color)} title={formatDateToYMD(date)}></td>;
};

export default ProgressCell;
