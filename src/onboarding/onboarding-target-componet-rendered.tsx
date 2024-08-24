"use client";

import { useEffect } from "react";
import { onboardingStore } from "./onboarding-global-store/onboarding-store";

const OnboardingTargetComponetRendered = () => {
  const { setIsTourRunning } = onboardingStore();

  useEffect(() => {
    setIsTourRunning(true);
  }, [setIsTourRunning]);

  return null;
};

export default OnboardingTargetComponetRendered;
