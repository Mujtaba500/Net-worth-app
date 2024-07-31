import userRouter from "./user/index.js";
import assetRouter from "./asset/index.js";
import liabilityRouter from "./liability/index.js";

const allRoutes = [userRouter, assetRouter, liabilityRouter];

export default allRoutes;
