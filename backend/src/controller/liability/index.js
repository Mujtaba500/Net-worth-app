import liabilityModel from "../../models/liability/index.js";

const liabilityController = {
  addliability: async (req, res) => {
    const payload = req.body;

    const user = req.user;

    const liability = new liabilityModel();

    liability.name = payload.name;
    liability.value = payload.value;
    liability.UserId = user.id;

    await liability.save();

    res.json({
      message: "Liability added",
    });
  },
  getliabilities: async (req, res) => {
    try {
      const user = req.user;
      const liabilities = await liabilityModel.findAll({
        where: {
          UserId: user.id,
        },
      });
      res.json({
        data: liabilities,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },
};

export default liabilityController;
