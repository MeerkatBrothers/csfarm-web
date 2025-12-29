import SkeletonItem from '@/components/atoms/SkeletonItem';

const QuizChoiceCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: 4 }).map((_, index) => {
        return <SkeletonItem key={`quiz-choice-card-skeleton-${index}`} className="h-16 w-full" />;
      })}
    </div>
  );
};

export default QuizChoiceCardSkeleton;
