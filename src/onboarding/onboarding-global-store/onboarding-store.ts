import { create } from "zustand";

type onboardingStoreType = {
  isTourRunning: boolean;
  setIsTourRunning: (value: boolean) => void;
  isTourCompleted: boolean;
  setIsTourCompleted: (value: boolean) => void;
};

export const onboardingStore = create<onboardingStoreType>()((set) => ({
  isTourRunning: false,
  setIsTourRunning: (value) => set({ isTourRunning: value }),
  isTourCompleted: true,
  setIsTourCompleted: (value) => set({ isTourCompleted: value }),
}));

// type onboardingCompletedStoreType = {
//   isTourCompleted: boolean;
//   setIsTourCompleted: (value: boolean) => void;
// };

// export const onboardingCompletedStore = create<onboardingCompletedStoreType>()(
//   (set) => ({
//     isTourCompleted: true,
//     setIsTourCompleted: (value) => set({ isTourCompleted: value }),
//   })
// );
