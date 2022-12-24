const customerModel = require("../models/customerModel.js");
const cardModel = require("../models/cardModel.js");

//create methods
const createCustomer = async (req, res) => {
  try {
    const user = await customerModel.findOne({ emailID: req.body.emailID });
    if (user)
      throw new Error("A user is already registered with this email address.");

    const createCustomData = await customerModel.create(req.body);
    res.send({ msg: createCustomData });
  } catch (error) {
    res.send(error.message);
  }
};

const createCard = async (req, res) => {
  try {
    const createCardData = await cardModel.create(req.body);

    res.send({ msg: createCardData });
  } catch (error) {
    res.send(error.message);
  }
};

//getMethods
const getCustomer = async (req, res) => {
  const getCustomerData = await customerModel.find({
    status: "ACTIVE",
    isDeleted: false,
  });
  res.send({ msg: getCustomerData });
};
//getAllCard
const getCard = async (req, res) => {
  const getCardData = await cardModel.find();
  res.send({ msg: getCardData });
};

//delete
const deleteCustomer = async (req, res) => {
  let id = req.body.customerID;
  const deleteCustomerData = await customerModel.findOneAndDelete(
    {
      customerID: id,
    },
    { isDeleted: false }
  );
  res.send({ msg: deleteCustomerData });
};

//create methods
module.exports.createCustomer = createCustomer;
module.exports.createCard = createCard;

//getMethods
module.exports.getCustomer = getCustomer;
module.exports.getCard = getCard;

//delete
module.exports.deleteCustomer = deleteCustomer;
