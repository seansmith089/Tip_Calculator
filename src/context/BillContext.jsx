import { createContext, useState } from "react";

export const BillContext = createContext()


export function BillContextProvider(props) {
    const [billTotal, setBillTotal] = useState (0);
    const [tipAmount, setTipAmount] = useState (0);
    const [people,setPeople] = useState (0);

    const [tipEach,setTipEach] = useState (0);
    const [totalEach,setTotalEach] = useState (0);

    const [grandTotal, setGrandTotal] = useState(0);

    const [resetActive, setResetActive] = useState(false);

    const [customText, setCustomText] = useState("CUSTOM")
    const[customBoxActive, setCustomBoxActive] = useState(false)

    const [billActive, setBillActive] = useState(false)
    const [peopleActive, setPeopleActive] = useState(false)


    // TIP BUTTON STATES

    const [active_5, setActive_5] = useState(false)
    const [active_10, setActive_10] = useState(false)
    const [active_15, setActive_15] = useState(false)
    const [active_20, setActive_20] = useState(false)
    const [active_25, setActive_25] = useState(false)

    return (
      <BillContext.Provider
        value={{
          billTotal,
          setBillTotal,
          tipAmount,
          setTipAmount,
          people,
          setPeople,
          tipEach,
          setTipEach,
          totalEach,
          setTotalEach,
          resetActive,
          setResetActive,
          customText,
          setCustomText,
          customBoxActive,
          setCustomBoxActive,
          setActive_5,
          setActive_10,
          setActive_15,
          setActive_20,
          setActive_25,
          active_5,
          active_10,
          active_15,
          active_20,
          active_25,
          grandTotal,
          setGrandTotal,
          billActive,
          setBillActive,
          peopleActive,
          setPeopleActive,
        }}
      >
        {props.children}
      </BillContext.Provider>
    );
}
