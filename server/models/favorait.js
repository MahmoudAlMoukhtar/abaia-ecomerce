const mongooose = require("mongoose");

const favoraitSechma = mongooose.Schema(
  {
    idUser: {
      type: String,
    },
    idProduct: {
      type: String,
    },
  },
  {timestamps: true}
);

const Favorait = mongooose.model("Favorait", favoraitSechma);

module.exports = Favorait;
