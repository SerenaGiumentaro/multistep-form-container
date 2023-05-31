import activeStateContext from "../../activeStateContext";
import stepStyle from "./Steps.module.css";
import { useContext } from "react";

export default function Steps({ stepNumber, stepCaption }) {
  const activeStep = useContext(activeStateContext);
  
  return (
    <>
      <div
        className={
          activeStep.activeStep === stepNumber
            ? `${stepStyle['circle-step']} ${stepStyle.active}`
            : stepStyle["circle-step"]
        }
      >
        {stepNumber}
      </div>
      <div className={stepStyle["step-caption"]}>
        <p> STEP {stepNumber} </p>
        <p> {stepCaption} </p>
      </div>
    </>
  );
}
