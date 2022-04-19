const routerExpress = require("express");
const router = routerExpress.Router();

const { loginUser } = require("../controllers/AuthenticationController.jsx");

router.get("/", loginUser);

module.exports = router;
