## Getting Started

Clone the project,

```bash
# install the necessary modules
bun install
# or
npm install
```

Run the development server:

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

**onboarding.tsx**

- The main place where steps and logic are defined
- If not suffice your query you can change the logic here

**onboarding-start-button.tsx**

- The button which is used to start the onBoarding process manually

**onboarding-target-rendered.tsx**

- The component that is used to trigger onboarding for multi routes.
- This component is only needed if you are using multiple routes.
- Every multiple onboarding route needs to have this component to render the tooltip.

**onboarding-store.ts**

- The global store that stores global values of onboarding

> [!NOTE]
> Checkout the above mentioned component to understand more about what it does.
