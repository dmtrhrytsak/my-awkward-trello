type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="h-screen overflow-auto px-4 bg-sky-600">{children}</div>
  );
};

export default Wrapper;
