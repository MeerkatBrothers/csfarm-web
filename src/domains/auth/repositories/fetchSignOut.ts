import signOutApi from "@/domains/auth/datasources/signOutApi";

const fetchSignOut = async (accessToken: string): Promise<void> => {
  await signOutApi(accessToken);
};

export default fetchSignOut;
