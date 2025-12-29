import GreetingSkeleton from '@/components/atoms/skeleton/GreetingSkeleton';
import QuizCardSkeleton from '@/components/organisms/skeleton/QuizCardSkeleton';
import QuizChoiceCardSkeleton from '@/components/organisms/skeleton/QuizChoiceCardSkeleton';

const TodayQuizSectionSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <GreetingSkeleton />

      <div className="flex flex-col gap-12">
        <QuizCardSkeleton />

        <QuizChoiceCardSkeleton />
      </div>
    </div>
  );
};

export default TodayQuizSectionSkeleton;
