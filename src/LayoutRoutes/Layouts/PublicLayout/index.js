const PublicLayout = ({ children }) => {
  return (
    <div>
      <h1>Public Layout</h1>
      <div className='bg-green-500'>{children}</div>
    </div>
  );
};

export default PublicLayout;
