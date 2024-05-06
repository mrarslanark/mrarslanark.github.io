interface ChipProps {
  text: string;
}

const Chip: React.FC<ChipProps> = ({ text }) => {
  return (
    <div className="w-fit bg-slate-200 px-2 py-1 rounded-lg border-2 border-slate-300 hover:bg-slate-300 transition-colors">
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default Chip;
