const THRESH_QUERY_KEYS = {
  STATUS: (quizId: string): string[] => ['quiz', 'status', quizId],
};

export default THRESH_QUERY_KEYS;
