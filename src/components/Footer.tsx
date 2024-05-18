const Footer: React.FC = () => {
  return (
    <div className="flex items-center bg-gray-100 justify-center py-2">
      <p className="text-sm">Arslan Mushtaq © {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
