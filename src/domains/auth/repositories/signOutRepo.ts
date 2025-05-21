import signOutSource from "@/domains/auth/datasources/signOutSource";

const signOutRepo = async (accessToken: string): Promise<void> => {
  await signOutSource(accessToken);
};

export default signOutRepo;
