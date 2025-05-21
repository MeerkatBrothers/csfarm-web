import withdrawSource from "@/domains/auth//datasources/withdrawSource";

const withdrawRepo = async (accessToken: string): Promise<void> => {
  await withdrawSource(accessToken);
};

export default withdrawRepo;
