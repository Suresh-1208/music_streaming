import Joi from "joi";

export const validateSignup = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(5).max(10).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    gender: Joi.string().valid("male", "female", "non-binary").required(),
    month: Joi.string().required(),
    date: Joi.string().required(),
    year: Joi.string().required(),
  });
  return schema.validate(data);
};

export const validateLogin = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};
