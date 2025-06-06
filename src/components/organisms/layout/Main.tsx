import { ReactNode } from "react";

import clsx from "clsx";

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: Readonly<MainProps>) => {
  return <div className={clsx("w-full max-w-7xl p-6", "md:p-12")}>{children}</div>;
};

export default Main;
