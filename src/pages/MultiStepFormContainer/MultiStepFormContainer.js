import activeStateContext from "../../activeStateContext";
import { useContext } from "react";
import PersonalInfoStep from "../PersonalInfoStep/PersonalInfoStep";
import SelectPlanStep from "../SelectPlanStep/SelectPlanStep";
import SelectAddOnStep from "../SelectAddsOnStep/SelectAddOnStep";
import FinishUpStep from "../FinishUpStep/FinishUpStep";
import StepsNavigation from "../StepsNavigation/StepsNavigation";
export default function MultiStepFormContainer() {
  const activeStep = useContext(activeStateContext);
  const isMobile = activeStep.isMobileView
  const stepsFormCaption = [
    {
      title: "Personal Info",
      description: "Please provide your name, email address, and phone number.",
    },
    {
      title: "Select your plan",
      description: "You have the option of monthly or yearly billing.",
    },
    {
      title: "Pick add-ons",
      description: "Add-ons help enhance your gaming experience.",
    },
    {
      title: "Finish up",
      description: "Double-check everything look OK before confirming.",
    },
  ];
  let activeStepComponent;
  switch (activeStep.activeStep) {
    case 1:
      activeStepComponent = <PersonalInfoStep />;
      break;
    case 2:
      activeStepComponent = <SelectPlanStep />;
      break;
    case 3:
      activeStepComponent = <SelectAddOnStep />;
      break;
    case 4:
      activeStepComponent = <FinishUpStep />;
      break;
    default:
      activeStepComponent = "";
      break;
  }

  return (
    <>
      <h1> {stepsFormCaption[activeStep.activeStep - 1].title} </h1>
      <p> {stepsFormCaption[activeStep.activeStep - 1].description} </p>
      {activeStepComponent}
    {isMobile? '': <StepsNavigation />}
    </>
  );
}
