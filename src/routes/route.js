const express = require("express");
const router = express.Router();

const customerController = require("../controllers/customerController");

//Project
//create
router.post("/createCustomer", customerController.createCustomer);
router.post("/createCard", customerController.createCard);
//get
router.get("/getCustomer", customerController.getCustomer);
router.get("/getCard", customerController.getCard);
//delete
router.delete("/deleteCustomer", customerController.deleteCustomer);

module.exports = router;
