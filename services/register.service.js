// check if user exists otherwise register

import { User } from "../models/user";

export const isUserExists = async (email) => {
  return User.findOne({ email });
};

export const register = async (newUser) => {
  return User.create(newUser);
};
