import { useContext } from "react";
import { BillContext } from "../../context/BillContext";

import "./cardStyles.css";

import Input from "../Inputs/Input";
import TipPercentButtons from "../Inputs/TipPercentButtons";

import personSVG from "../../images/icon-person.svg";
import dollarSVG from "../../images/icon-dollar.svg";

function CardCalculationsBG() {
  const { setBillTotal, setPeople } = useContext(BillContext);

  return (
    <div className="card-calc-bg">
      <Input
        reference={"bill"}
        title={"Bill"}
        icon={dollarSVG}
      ></Input>
      <TipPercentButtons></TipPercentButtons>
      <Input
        reference={"people"}
        title={"Number of People"}
        icon={personSVG}
      ></Input>
    </div>
  );
}

export default CardCalculationsBG;
