const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const cardSchema = mongoose.Schema({
  cardType: {
    type: String,
    enum: ["REGULAR", "SPECIAL"],
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["ACTIVE", "INACTIVE"],
    default: "ACTIVE",
  },
  vision: String,
  customerID: { type: String, required: true },
});

cardSchema.plugin(AutoIncrement, { inc_field: "cardNumber" });

module.exports = mongoose.model("card", cardSchema);
