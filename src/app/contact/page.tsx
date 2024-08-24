import OnboardingTargetComponetRendered from "@/onboarding/onboarding-target-componet-rendered";
import { HOMEPAGE_ROUTE } from "@/routes/routes";
import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <div className=" w-fit">
      <OnboardingTargetComponetRendered />
      <span className="step5">ContactPage</span>
      <br />
      <br />
      <Link href={HOMEPAGE_ROUTE}>Homepage</Link>
    </div>
  );
};

export default ContactPage;
