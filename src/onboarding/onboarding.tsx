"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Joyride, { Step } from "react-joyride";
import { onboardingStore } from "./onboarding-global-store/onboarding-store";

const steps: Step[] = [
  {
    target: ".my-first-step",
    content: "This is my awesome feature!",
    placement: "top-end",
    // directly shows the onboarding when onboarding starts
    disableBeacon: true,
    title: "Onboarding",
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
    // any data can be send and is intercepted in callback function (e)=> e.step.data
    // where e.step.data point to this passed data
    data: { nextRoute: "/about" },
  },
  {
    target: ".step4",
    content: "This is about page",
    event: "hover",
    placementBeacon: "top",
    placement: "bottom",
    data: { prevRoute: "/", nextRoute: "/contact" },
  },
  {
    target: ".step5",
    content: "This is contact page",
    event: "hover",
    placementBeacon: "top",
    placement: "bottom",
    data: { prevRoute: "/about" },
  },
];

const Onboarding = () => {
  const {
    isTourRunning,
    setIsTourRunning,
    isTourCompleted,
    setIsTourCompleted,
  } = onboardingStore();

  const [loaded, setLoaded] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return;
  }

  return (
    <>
      <Joyride
        // stepIndex={index}
        steps={steps}
        run={!isTourCompleted && isTourRunning}
        continuous
        disableCloseOnEsc={true}
        scrollToFirstStep={true}
        showSkipButton={true}
        disableOverlayClose={true}
        locale={{ last: "Finnish" }}
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
          const {
            action,
            controlled,
            index,
            lifecycle,
            origin,
            size,
            status,
            step,
            type,
          } = e;
          const nextRoute = step.data?.nextRoute;
          const prevRoute = step.data?.prevRoute;

          console.log(e);

          // if have next step, nextRoute and user click next (step:after)
          if (action === "next" && nextRoute && type === "step:after") {
            setIsTourRunning(false);
            router.push(nextRoute);
          }

          // if have prev step, prevRoute and user click previous (back) (step:after)
          if (action === "prev" && prevRoute && type === "step:after") {
            setIsTourRunning(false);
            router.push(prevRoute);
          }

          // if user click next and there is no other steps and type is tour:end
          if (
            action === "next" &&
            status === "finished" &&
            type === "tour:end" &&
            index === steps.length - 1
          ) {
            setIsTourRunning(false);
            setIsTourCompleted(true);
          }

          // is user click skip button
          if (
            action === "skip" &&
            status === "skipped" &&
            type === "tour:end"
          ) {
            setIsTourRunning(false);
            setIsTourCompleted(true);
          }

          // if user close the onboarding but have nextroute.
          if (action === "close" && nextRoute) {
            setIsTourRunning(false);
            router.push(nextRoute);
          }
        }}
      />
    </>
  );
};

export default Onboarding;
