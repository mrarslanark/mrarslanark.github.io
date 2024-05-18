import Link from "next/link";
import { PropsWithChildren } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import SectionHeading, { SectionHeadingProps } from "./SectionHeading";

type ContainerProps = {
  invert?: boolean;
  header?: SectionHeadingProps;
  showHomeBtn?: boolean;
};

const Section: React.FC<PropsWithChildren<ContainerProps>> = ({
  children,
  invert,
  header,
  showHomeBtn,
}) => {
  const backgroundColor = invert ? "bg-gray-100" : "bg-white";

  return (
    <section>
      <div className={`flex justify-center items-center ${backgroundColor}`}>
        <div className={"w-[864px] p-12 flex flex-col"}>
          <div className="flex flex-col gap-y-4">
            {showHomeBtn && (
              <Link href={"/"}>
                <div className="flex items-center">
                  <IoIosArrowRoundBack size={24} />
                  <p>Home</p>
                </div>
              </Link>
            )}
            {header && (
              <SectionHeading
                heading={header.heading}
                subtitle={header.subtitle}
              />
            )}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
