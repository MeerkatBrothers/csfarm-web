import { ReactNode } from "react";

interface ConetentProps {
  children: ReactNode;
}

const Content = ({ children }: Readonly<ConetentProps>) => {
  return <main className="flex justify-center w-full p-6">{children}</main>;
};

export default Content;
