import signOutApi from "@/domains/auth/datasources/signOutApi";

const fetchSignOut = async (): Promise<void> => {
  await signOutApi();
};

export default fetchSignOut;
