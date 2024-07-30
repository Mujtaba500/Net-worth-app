import userModel from "../../models/user/index.js";
import { compare, hash } from "bcrypt";
import jwt from "jsonwebtoken";

const userController = {
  signUp: async (req, res) => {
    try {
      const payload = req.body;
      console.log(payload);
      const userCheck = await userModel.findOne({
        where: {
          email: payload.email,
        },
      });
      if (userCheck) {
        return res.status(400).json({
          message: "user with this email already exists",
        });
      }
      const hpassword = await hash(payload.password, 10);
      const newUser = await userModel.create({
        fullName: payload.fullName,
        phoneNumber: payload.phoneNumber,
        email: payload.email,
        password: hpassword,
      });
      res.json({
        message: "User created successfully",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },
  signIn: async (req, res) => {
    try {
      const payload = req.body;
      console.log(payload);
      const userCheck = await userModel.findOne({
        where: {
          email: payload.email,
        },
      });
      if (!userCheck) {
        return res.status(400).json({
          message: "Invalid credentials",
        });
      }
      const comparePassword = await compare(
        payload.password,
        userCheck.password
      );
      if (!comparePassword) {
        return res.status(400).json({
          message: "Invalid credentials",
        });
      }
      const data = {
        id: userCheck.id,
        fullName: userCheck.fullName,
      };

      const token = jwt.sign(data, process.env.PRIVATE_KEY);

      res.json({ data: data, token: token });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },
};

export default userController;
