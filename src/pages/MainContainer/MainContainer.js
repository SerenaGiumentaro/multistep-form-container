import { useState, useEffect } from "react";
import DisplaySteps from "../DisplaySteps/DisplaySteps";
import activeStateContext from "../../activeStateContext";
import MultiStepFormContainer from "../MultiStepFormContainer/MultiStepFormContainer";
import StepsNavigation from "../StepsNavigation/StepsNavigation";


export default function MainContainer() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [activeStep, setActiveStep] = useState(1);
  useEffect(() => {
    function handleResize() {
      setIsMobileView(window.innerWidth < 768);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <activeStateContext.Provider value={{ activeStep, setActiveStep, isMobileView }}>
        {isMobileView ? (
          <div>
            <DisplaySteps />
            <MultiStepFormContainer />
            <StepsNavigation />
            mobile
          </div>
        ) : (
            <div>
            <DisplaySteps />
            <MultiStepFormContainer>
            </MultiStepFormContainer>
            web
          </div>
        )}
      </activeStateContext.Provider>
    </>
  );
}
