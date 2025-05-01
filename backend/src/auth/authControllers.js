import { Users } from "../models/userModel.js";

export const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const user = await Users.register({ username, password, email });
    const token = user.getToken();

    res.send(token);
  } catch (e) {
    res.send(e.message);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await Users.login({ email, password });

    res.send(token);
  } catch (e) {
    res.send(e.message);
  }
};
