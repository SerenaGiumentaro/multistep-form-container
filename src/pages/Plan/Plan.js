
export default function Plan({planData, billing}) {
  return (
    <div>
       <div>{planData.svg}</div> 
       <p> {planData.type} </p>
       <p> {billing === 'mo' ?  planData.priceMo : planData.priceYr}{billing} </p>
    </div>
  )
}
