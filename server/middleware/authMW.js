const jwt = require("jsonwebtoken");

const authMW = async (req, res, nxt) => {
  try {
    const token = req?.headers?.authorization?.split(" ")[1];
    const isCustomAuth = token?.length < 500;
    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "132jwtsecretkey123");
      //console.log("decodedData", decodedData);
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }
    nxt();
  } catch (err) {
    console.log(err);
  }
};

module.exports = authMW;
