import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  let total = 0;
  transactions.map(transaction => {
    total += transaction.amount;
  });

  return (
    <Fragment>
      <h4>Your Balance</h4>
      <h1>₹{numberWithCommas(total)}</h1>
    </Fragment>
  );
};
