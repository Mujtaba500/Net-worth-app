import assetController from "../../controller/asset/index.js";
import verifyToken from "../../middleware/verifyToken.js";

import { Router } from "express";

const assetRouter = Router();

assetRouter.post("/asset", verifyToken, assetController.addAsset);

assetRouter.get("/assets", verifyToken, assetController.getAssets);

export default assetRouter;
