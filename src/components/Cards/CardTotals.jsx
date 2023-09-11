import "./cardStyles.css"

import TotalsTemplate from "../Totals/TotalsTemplate";
import ResetButton from "../Totals/ResetButton";

function CardTotals() {
    return (
      <div className="card-totals">
        <TotalsTemplate
          reference="totalEach"
          title={"Bill Total"}
        ></TotalsTemplate>
        <TotalsTemplate
          reference="tipEach"
          title={"+Tip Amount"}
        ></TotalsTemplate>

        <ResetButton></ResetButton>
      </div>
    );
}

export default CardTotals;