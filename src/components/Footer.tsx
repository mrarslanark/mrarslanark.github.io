const Footer: React.FC = () => {
  return (
    <footer className="flex items-center bg-gray-100 justify-center py-2">
      <p className="text-sm">Arslan Mushtaq © {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
