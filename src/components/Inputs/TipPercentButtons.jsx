import { useContext } from "react";
import { BillContext } from "../../context/BillContext";

import "./tipPercentStyles.css"


function TipPercentButtons() {


    // Colours for conditional rendering
    const darkGreen = `hsl(183, 100%, 15%`;
    const strongCyan = `hsl(172, 67%, 45%)`;

    const {
      setTipAmount,
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
    } = useContext(BillContext);


    // Clears the text in the custom box, ready to type number 
    function customClickHandler(){
      setCustomBoxActive(true)
      setCustomText("");
      setActive_5(false)
      setActive_10(false);
      setActive_15(false);
      setActive_20(false);
      setActive_25(false);
      
    }

    // Ran each time a tip button is clikced
    function buttonHandler(p){
        setCustomBoxActive(false)
        setCustomText("CUSTOM")
        setTipAmount(p)
    }

    // Sets the custom tip amount as the user types 
    function customHandler(e){
      setCustomBoxActive(true)
      setTipAmount(e.target.value);
      setCustomText(e.target.value)
    }

    function tip_5(p){
      setCustomBoxActive(false);
      setCustomText("CUSTOM");
      setActive_5(true);
      setActive_10(false);
      setActive_15(false);
      setActive_20(false);
      setActive_25(false);
      setTipAmount(p);
    }
    
    function tip_10(p) {
      setCustomBoxActive(false);
      setCustomText("CUSTOM");
      setActive_5(false);
      setActive_10(true);
      setActive_15(false);
      setActive_20(false);
      setActive_25(false);
      setTipAmount(p);
    }

    function tip_15(p) {
      setCustomBoxActive(false);
      setCustomText("CUSTOM");
      setActive_5(false);
      setActive_10(false);
      setActive_15(true);
      setActive_20(false);
      setActive_25(false);
      setTipAmount(p);
    }

    function tip_20(p) {
      setCustomBoxActive(false);
      setCustomText("CUSTOM");
      setActive_5(false);
      setActive_10(false);
      setActive_15(false);
      setActive_20(true);
      setActive_25(false);
      setTipAmount(p);
    }

    function tip_25(p) {
      setCustomBoxActive(false);
      setCustomText("CUSTOM");
      setActive_5(false);
      setActive_10(false);
      setActive_15(false);
      setActive_20(false);
      setActive_25(true);
      setTipAmount(p);
    }
    

    return (
      <div className="tip-pcnt-ctr">
        <p className="header"> Select Tip %</p>
        <div className="btn-grid">
          <div className="pcnt-button-wrapper ">
            <input
              name="pcnt-radio-btn"
              type="radio"
              onClick={() => tip_5(5)}
            />
            <div
              className="button-body"
              style={{
                backgroundColor: active_5 === true ? strongCyan : darkGreen,
                border: active_5 === true ? `2px solid ${darkGreen}` : "null",
                color: active_5 === true ? darkGreen : "white",
              }}
            >
              5%
            </div>
          </div>

          <div className="pcnt-button-wrapper ">
            <input
              name="pcnt-radio-btn"
              type="radio"
              onClick={() => tip_10(10)}
            />
            <div
              className="button-body"
              style={{
                backgroundColor: active_10 === true ? strongCyan : darkGreen,
                border: active_10 === true ? `2px solid ${darkGreen}` : "null",
                color: active_10 === true ? darkGreen : "white",
              }}
            >
              10%
            </div>
          </div>

          <div className="pcnt-button-wrapper ">
            <input
              name="pcnt-radio-btn"
              type="radio"
              onClick={() => tip_15(15)}
            />
            <div
              className="button-body"
              style={{
                backgroundColor: active_15 === true ? strongCyan : darkGreen,
                border: active_15 === true ? `2px solid ${darkGreen}` : "null",
                color: active_15 === true ? darkGreen : "white",
              }}
            >
              15%
            </div>
          </div>

          <div className="pcnt-button-wrapper ">
            <input
              name="pcnt-radio-btn"
              type="radio"
              onClick={() => tip_20(20)}
            />
            <div
              className="button-body"
              style={{
                backgroundColor: active_20 === true ? strongCyan : darkGreen,
                border: active_20 === true ? `2px solid ${darkGreen}` : "null",
                color: active_20 === true ? darkGreen : "white",
              }}
            >
              20%
            </div>
          </div>

          <div className="pcnt-button-wrapper ">
            <input
              name="pcnt-radio-btn"
              type="radio"
              onClick={() => tip_25(25)}
            />
            <div
              className="button-body"
              style={{
                backgroundColor: active_25 === true ? strongCyan : darkGreen,
                border: active_25 === true ? `2px solid ${darkGreen}` : "null",
                color: active_25 === true ? darkGreen : "white",
              }}
            >
              25%
            </div>
          </div>

          <input
            type="text"
            required
            className="pcnt-button-wrapper custom"
            value={customText}
            onClick={customClickHandler}
            onChange={(e) => customHandler(e)}
            style={{
              border: customBoxActive ? "2px solid var(--strongCyan)" : "none",
            }}
          ></input>

          {/* <div className="pcnt-button custom">Custom</div> */}
        </div>
      </div>
    );
}

export default TipPercentButtons;