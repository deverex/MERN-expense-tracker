import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  let income = 0;
  let expense = 0;

  transactions.map(transaction => {
    if (transaction.amount < 0) {
      expense += transaction.amount;
    } else {
      income += transaction.amount;
    }
  });

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+₹{numberWithCommas(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-₹{Math.abs(numberWithCommas(expense))}</p>
      </div>
    </div>
  );
};
