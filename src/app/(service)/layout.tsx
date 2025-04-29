import Header from "@/components/organisms/Header";
import Content from "@/components/organisms/Content";

interface ServiceLayoutProps {
  children: React.ReactNode;
}

const ServiceLayout = ({ children }: Readonly<ServiceLayoutProps>) => {
  return (
    <div className="flex flex-col h-full">
      <header className="flex justify-center px-4 border-b border-service-gray-medium">
        <Header />
      </header>

      <main className="flex flex-1 justify-center">
        <Content>{children}</Content>
      </main>
    </div>
  );
};

export default ServiceLayout;
