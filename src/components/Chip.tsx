interface ChipProps {
  text: string;
}

const Chip: React.FC<ChipProps> = ({ text }) => {
  return (
    <div className="w-fit bg-slate-200 px-1.5 py-0.5 rounded-lg border-2 border-slate-300 hover:bg-slate-300 transition-colors">
      <p className="text-xs">{text}</p>
    </div>
  );
};

export default Chip;
