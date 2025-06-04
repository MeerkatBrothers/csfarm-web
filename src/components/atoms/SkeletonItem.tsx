import clsx from "clsx";

interface SkeletonItemProps {
  styles?: string;
}

const SkeletonItem = ({ styles }: SkeletonItemProps) => {
  return <div className={clsx("rounded-lg bg-gray-100 animate-pulse", styles)} />;
};

export default SkeletonItem;
