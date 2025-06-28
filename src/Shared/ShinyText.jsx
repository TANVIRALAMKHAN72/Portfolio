const ShinyText = ({ children }) => {
  return (
    <span
      className="bg-gradient-to-r from-transparent via-white to-transparent bg-[length:200%_100%] bg-clip-text text-transparent animate-shine"
      style={{ WebkitBackgroundClip: 'text' }}
    >
      {children}
    </span>
  );
};

export default ShinyText;
