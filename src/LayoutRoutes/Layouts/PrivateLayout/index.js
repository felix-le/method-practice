const PrivateLayout = ({ children }) => {
  return (
    <div>
      <h1>Private Layout</h1>
      <div className='bg-red-500'>{children}</div>
    </div>
  );
};

export default PrivateLayout;
