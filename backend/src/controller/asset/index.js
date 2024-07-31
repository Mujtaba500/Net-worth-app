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
  getAssets: async (req, res) => {
    try {
      const user = req.user;
      const assets = await assetModel.findAll({
        where: {
          UserId: user.id,
        },
      });
      res.json({
        data: assets,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },
};

export default assetController;
