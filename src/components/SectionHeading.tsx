export interface SectionHeadingProps {
  heading: string;
  subtitle: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  heading,
  subtitle,
}) => {
  return (
    <div className="flex flex-col gap-y-1">
      <p className="text-2xl font-semibold">{heading}</p>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;
