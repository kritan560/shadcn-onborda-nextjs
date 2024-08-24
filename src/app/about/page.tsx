import OnboardingTargetComponetRendered from "@/onboarding/onboarding-target-componet-rendered";
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
    </div>
  );
};

export default AboutPage;
