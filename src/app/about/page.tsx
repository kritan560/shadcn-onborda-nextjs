import OnboardingTargetComponetRendered from "@/onboarding/onboarding-target-componet-rendered";
import { HOMEPAGE_ROUTE } from "@/routes/routes";
import Link from "next/link";
import { lazy, Suspense } from "react";

// artificial delayed component
const DelayedComponent = lazy(
  () =>
    new Promise<{ default: React.ComponentType }>((resolve, reject) => {
      setTimeout(() => {
        resolve({ default: () => <>resolve</> });
      }, 12000);
    })
);

const AboutPage = async () => {
  return (
    <div className="min-h-screen">
      <OnboardingTargetComponetRendered />
      <p className="step4 w-fit">step 4 is loaded</p>
      <br />
      <br />
      {/* render the fallback component */}
      AboutPage :{" "}
      <Suspense fallback={<>Loading...</>}>{<DelayedComponent />}</Suspense>
      <br />
      <br />
      <Link href={HOMEPAGE_ROUTE}>Homepage</Link>
    </div>
  );
};

export default AboutPage;
