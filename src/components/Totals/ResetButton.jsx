import { useContext } from "react";
import { BillContext } from "../../context/BillContext";

import "./resetButtonStyles.css"
import { isDisabled } from "@testing-library/user-event/dist/utils";

function ResetButton() {

   const {
     billTotal,
     setBillTotal,
     tipAmount,
     people,
     setPeople,
     setTipEach,
     setTotalEach,
     resetActive,
     setResetActive,
     setCustomBoxActive,
     setCustomText,
     grandTotal,
     setGrandTotal,
     tipEach,
   } = useContext(BillContext);

  

    function totalCalc(){
        setTipEach((((billTotal / 100) * tipAmount) / people).toFixed(2) )
        setTotalEach((billTotal / people).toFixed(2) );
        setResetActive(true)
    }

    function resetAll(){
      setTipEach(0)
      setTotalEach(0)
      setBillTotal(0)
      setPeople(0)
      setResetActive(false)
      setCustomBoxActive(false)
      setCustomText("CUSTOM")
      

    } 

   

    return (
      <button
        className="reset-btn"
        onClick={resetActive == true ? resetAll : totalCalc}
        disabled={people > 0 && billTotal > 0 && tipAmount > 0 ? false: true}
      >
        {resetActive == false ? "SPLIT" : "RESET"}
      </button>
    );
}

export default ResetButton;