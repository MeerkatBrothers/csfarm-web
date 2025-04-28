interface ConetentLayoutProps {
  children: React.ReactNode;
}

const Content = ({ children }: Readonly<ConetentLayoutProps>) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-row max-w-7xl w-full">
        <div>nav</div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Content;
