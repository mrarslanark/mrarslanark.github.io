import Link from "next/link";

export interface SectionHeadingProps {
  heading: string;
  subtitle: string;
  seeAllLink: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  heading,
  subtitle,
  seeAllLink,
}) => {
  return (
    <div className="flex flex-col gap-y-1">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold">{heading}</p>
        <Link href={seeAllLink}>
          <p>See All</p>
        </Link>
      </div>
      <p className="text-base text-gray-400">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;
