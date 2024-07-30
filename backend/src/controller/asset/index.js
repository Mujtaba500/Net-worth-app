import assetModel from "../../models/asset/index.js";

const assetController = {
  addAsset: async (req, res) => {
    const payload = req.body;

    const user = req.user;

    const asset = new assetModel();

    asset.name = payload.name;
    asset.value = payload.value;
    asset.UserId = user.id;

    await asset.save();

    res.json({
      message: "assset added",
    });
  },
  getAssets: (req, res) => {},
};

export default assetController;
