module.exports = router = require("express").Router();

const {
  getTransactions,
  addTransaction,
  deleteTransaction
} = require("../controllers/transactions");

router
  .route("/")
  .get(getTransactions)
  .post(addTransaction);

router.route("/:id").delete(deleteTransaction);
