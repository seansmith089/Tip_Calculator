import { useContext } from "react";
import { BillContext } from "../../context/BillContext";

import "./totalsStyles.css";

function TotalsTemplate({ title, reference }) {

    const { tipEach, totalEach } = useContext(BillContext);

  return (
    <div className="totals-cntr">
      <div className="totals-title-cntr">
        <p className="totals-title">{title}</p>
        <p className="totals-pp-txt">/ person</p>
      </div>
      <div className="totals-amount-cntr">
        <h1 className="totals-amount-txt">
          {reference == "tipEach" && "$" + tipEach}
          {reference == "totalEach" && "$" + totalEach}
          {reference == "grandTotalEach" && "$" + (totalEach + tipEach)}
        </h1>
      </div>
    </div>
  );
}

export default TotalsTemplate;
