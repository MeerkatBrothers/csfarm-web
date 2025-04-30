import { redirect } from "next/navigation";

const HomePage = () => {
  redirect("/insight/today");
};

export default HomePage;
