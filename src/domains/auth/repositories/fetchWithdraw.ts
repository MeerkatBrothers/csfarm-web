import withdrawApi from "@/domains/auth//datasources/withdrawApi";

const fetchWithdraw = async (accessToken: string): Promise<void> => {
  await withdrawApi(accessToken);
};

export default fetchWithdraw;
