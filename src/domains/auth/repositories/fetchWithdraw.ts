import withdrawApi from "@/domains/auth//datasources/withdrawApi";

const fetchWithdraw = async (): Promise<void> => {
  await withdrawApi();
};

export default fetchWithdraw;
