import { PropsWithChildren } from "react";

interface ContainerProps {
  invert?: boolean;
}

const Section: React.FC<PropsWithChildren<ContainerProps>> = ({
  children,
  invert,
}) => {
  const backgroundColor = invert ? "bg-gray-100" : "bg-white";

  return (
    <section>
      <div className={`flex justify-center items-center ${backgroundColor}`}>
        <div className="w-[864px] p-12">{children}</div>
      </div>
    </section>
  );
};

export default Section;
