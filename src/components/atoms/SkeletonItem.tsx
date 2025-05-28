import clsx from "clsx";

interface SkeletonItemProps {
  styles?: string;
}

const SkeletonItem = ({ styles }: SkeletonItemProps) => {
  return <div className={clsx("rounded bg-service-gray-medium animate-pulse", styles)} />;
};

export default SkeletonItem;
