import Header from "@/components/organisms/Header";
import Content from "@/components/organisms/Content";

interface ServiceLayoutProps {
  children: React.ReactNode;
}

const ServiceLayout = ({ children }: Readonly<ServiceLayoutProps>) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};

export default ServiceLayout;
