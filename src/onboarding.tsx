"use client";

import React, { useEffect, useState } from "react";
import Joyride, { Step } from "react-joyride";
import { Button } from "./components/ui/button";

const steps: Step[] = [
  {
    target: ".my-first-step",
    content: "This is my awesome feature!",
    placement: "top-end",
    // directly shows the onboarding when onboarding starts
    disableBeacon: true,
  },
  {
    target: ".my-other-step",
    content: "This another awesome feature!",
    event: "hover",
    // here do not show the onboard directly instead show the beacon
    placementBeacon: "top",
  },
  {
    target: ".step3",
    content: "This is light/dark mode toggle",
    event: "hover",
    placementBeacon: "top",
  },
  {
    target: ".step4",
    content: "This is about page",
    event: "hover",
    placementBeacon: "top",
    placement : 'right-end'
  },
];

const Onboarding = () => {
  const [run, setRun] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return;
  }

  return (
    <>
      <Button
        onClick={() => {
          setRun(!run);
        }}
      >
        Onboarding
      </Button>

      <Joyride
        steps={steps}
        run={run}
        continuous
        disableCloseOnEsc={true}
        scrollToFirstStep={true}
        showSkipButton={true}
        styles={{
          options: {
            // pointer color
            arrowColor: "#0999",
            // background color of popup
            backgroundColor: "#0999",
            // overlay color with alpha value
            overlayColor: "rgb(39 39 42 / 0.9)",
            // color of a button
            primaryColor: "rgb(144 163 194 / 1)",
            // text color of a button
            textColor: "white",
            beaconSize: 60,
          },
          buttonBack: { color: "white" },
        }}
        callback={(e) => {
          // if the aaction is completed set the state to false
          if (e.action === "reset") {
            setRun(false);
          }
        }}
      />
    </>
  );
};

export default Onboarding;
