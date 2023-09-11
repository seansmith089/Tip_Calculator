import { useContext } from "react";
import { BillContext } from "../../context/BillContext";


import "./inputStyles.css";

function Input({ title, icon, reference }) {
  const { billTotal, setBillTotal, people, setPeople, setBillActive, setPeopleActive, peopleActive, billActive } =
    useContext(BillContext);

  function peopleClickHandler(){
    setPeople("")
    setPeopleActive(true);
    setBillActive(false);
  }

  function billClickHandler(){
    setBillTotal('')
    setBillActive(true);
    setPeopleActive(false);
  }

  return (
    <div className="input-ctr">
      <div className="input-title-ctr">
        <p className="header">{title}</p>
      </div>
      <div
        className="input-txt-ctr"
      >
        <img className="input-svg" src={icon} alt="" />
        <input
          className="input-bar"
          type="number"
          value={reference == "people" ? people : billTotal}
          onChange={
            reference == "people"
              ? (e) => setPeople(e.target.value)
              : (e) => setBillTotal(e.target.value)
          }
          onClick={
            reference == "people" ? peopleClickHandler : billClickHandler
          }
        />
      </div>
    </div>
  );
}

export default Input;
