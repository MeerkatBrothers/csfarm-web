import clsx from "clsx";

import SideNav from "@/components/organisms/SideNav";

interface ConetentProps {
  children: React.ReactNode;
}

const Content = ({ children }: Readonly<ConetentProps>) => {
  return (
    <div className="flex flex-row max-w-7xl w-full">
      <nav
        className={clsx(
          "p-4 border-r border-service-gray-medium",
          "hidden md:block"
        )}
      >
        <SideNav />
      </nav>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default Content;
