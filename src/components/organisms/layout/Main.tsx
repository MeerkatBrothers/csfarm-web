import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: Readonly<MainProps>) => {
  return <div className="w-full max-w-7xl p-6">{children}</div>;
};

export default Main;
