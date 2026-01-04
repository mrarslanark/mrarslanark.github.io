import Section from "./Section";
import SocialLinks from "./SocialLinks";

const Introduction = () => {
  return (
    <Section>
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-md font-semibold md:text-2xl">Arslan Mushtaq</p>
            <p className="text-xs md:text-base text-gray-600 dark:text-gray-400">
              Principle Software Engineer
            </p>
          </div>
          <SocialLinks />
          <p className="text-xs md:text-base">
            Principal Mobile Software Engineer with 10+ years of experience
            architecting, scaling, and leading high-impact mobile and web
            applications across fintech, healthcare, telecommunications, and
            consumer domains. Proven owner of mobile architecture decisions for
            React Native platforms, driving performance, reliability, and
            developer productivity at scale. Extensive experience leading
            distributed teams, defining engineering standards, automating CI/CD
            pipelines, and delivering production-grade systems used by hundreds
            of thousands of users. Trusted technical leader who partners closely
            with Product, UX, and Backend stakeholders to translate business
            strategy into resilient mobile platforms.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Introduction;
