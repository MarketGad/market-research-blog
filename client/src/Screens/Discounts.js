import React from "react";
import BurnCoinError from "../Components/BurnCoinError";
import Popup from "../Components/Popup";
import BurnCoin from "../Components/BurnCoin";

const Discounts = () => {
  const [openBazaarErr, setOpenBazaarErr] = React.useState(false);
  return (
    <div className="container">
      <div className="product-content center">
        {/*<h5>
          Burn your interaction points to join the exclusive club and earn
          discounts on your subscriptions
        </h5>*/}
        <BurnCoin />
        <div style={{ padding: "15px" }}>
          <a
            className="waves-effect waves-light btn-large pro-btn1"
            onClick={() => {
              setOpenBazaarErr(true);
            }}
          >
            Burn 1000 points to enter
          </a>
          <Popup
            title="Signin"
            openPopup={openBazaarErr}
            setOpenPopup={setOpenBazaarErr}
          >
            <BurnCoinError
              openSignin={openBazaarErr}
              setOpenSignin={setOpenBazaarErr}
            />
          </Popup>
        </div>
      </div>
    </div>
  );
};
export default Discounts;
