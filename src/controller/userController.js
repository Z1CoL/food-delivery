import { User } from "../models/User.js";
import bcrypt from "bcrypt";

// register section
export const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("email", req.body);
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ email, password: hashedPassword });

    res.status(200).send({ message: "User created", user: user });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// login section
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "User not found" });

    const valid = await bcrypt.compareSync(password, user.password);
    if (!valid)
      return res.status(401).send({ message: "password buruu baina " });

    res.status(200).json({ message: "Login success" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
