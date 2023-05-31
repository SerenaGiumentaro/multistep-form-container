import activeStateContext from "../../activeStateContext";
import { useContext } from "react";

export default function StepsNavigation() {
  const activeStep = useContext(activeStateContext);

  const nextStep = () => {
    if (activeStep.activeStep < 4) {
      activeStep.setActiveStep(activeStep.activeStep + 1);
    }
  };

  const backStep = () => {
    if (activeStep.activeStep > 1) {
      activeStep.setActiveStep(activeStep.activeStep - 1);
    }
  };
  return (
    <>
      {activeStep.activeStep > 1 ? (
        <button onClick={backStep}>Go back</button>
      ) : (
        ""
      )}
      <button onClick={nextStep}>Next</button>
    </>
  );
}
