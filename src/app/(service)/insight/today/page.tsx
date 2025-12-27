import fetchTodayInsight from '@/features/insight/apis/server/fetch-today-insight';
import TodayInsightWelcomeMessage from '@/features/insight/components/TodayInsightWelcomeMessage';
import TodayInsightSection from '@/features/insight/components/TodayInsightSection';

export const revalidate = 600;

const TodayInsightPage = async () => {
  const todayInsight = await fetchTodayInsight(revalidate);

  return (
    <div className="flex flex-col gap-10">
      <TodayInsightWelcomeMessage />

      <TodayInsightSection insight={todayInsight} />
    </div>
  );
};

export default TodayInsightPage;
