import Link from "next/link";

export interface SectionHeadingProps {
  heading: string;
  subtitle: string;
  seeAllLink: string;
  showSeeAll?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  heading,
  subtitle,
  seeAllLink,
  showSeeAll = true,
}) => {
  return (
    <div className="flex flex-col gap-y-1">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold">{heading}</p>
        {showSeeAll && (
          <Link href={seeAllLink}>
            <p>See All</p>
          </Link>
        )}
      </div>
      <p className="text-base text-gray-400">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;
