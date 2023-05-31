import Steps from "../Steps/Steps";

export default function DisplaySteps() {
  const steps = [
    { number: 1, caption: "YOUR INFO" },
    { number: 2, caption: "SELECT PLAN" },
    { number: 3, caption: "ADD-ONS" },
    { number: 4, caption: "SUMMARY" },
  ];

  const stepsList = steps.map(step => {
    return(
        <Steps key={step.number} stepNumber={step.number} stepCaption={step.caption}></Steps>
    )
  })
  return <> {stepsList} </>;
}

