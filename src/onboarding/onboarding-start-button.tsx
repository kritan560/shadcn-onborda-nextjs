"use client";

import React from "react";
import { Button } from "../components/ui/button";
import { onboardingStore } from "./onboarding-global-store/onboarding-store";

const OnboardingStartButton = () => {
  const { setIsTourRunning, setIsTourCompleted } = onboardingStore();

  return (
    <Button
      onClick={() => {
        setIsTourRunning(true);
        setIsTourCompleted(false);
      }}
    >
      Start Tour
    </Button>
  );
};

export default OnboardingStartButton;
