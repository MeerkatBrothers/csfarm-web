import fetchTodayInsight from '@/features/insight/apis/server/fetch-today-insight';
import TodayInsightSection from '@/features/insight/components/TodayInsightSection';

export const revalidate = 600;

const TodayInsightPage = async () => {
  const todayInsight = await fetchTodayInsight(revalidate);

  return <TodayInsightSection insight={todayInsight} />;
};

export default TodayInsightPage;
