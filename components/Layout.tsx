export const Layout = ({ children }) => {
  return (
    <div className='flex justify-evenly w-full max-w-screen-lg mx-auto flex-col'>
      {children}
    </div>
  );
};
