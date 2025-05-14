const QUIZ_QUERY_KEYS = {
  STATUS: (quizId: number): string[] => ["quiz", "status", quizId.toString()],
};

export default QUIZ_QUERY_KEYS;
