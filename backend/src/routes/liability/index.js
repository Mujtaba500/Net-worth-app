import liabilityController from "../../controller/liability/index.js";
import verifyToken from "../../middleware/verifyToken.js";

import { Router } from "express";

const liabilityRouter = Router();

liabilityRouter.post(
  "/liability",
  verifyToken,
  liabilityController.addliability
);

liabilityRouter.get(
  "/liabilities",
  verifyToken,
  liabilityController.getliabilities
);

export default liabilityRouter;
