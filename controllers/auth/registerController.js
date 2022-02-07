import Joi from "joi";

const registerController = {
  async register(req, res, next) {
    const registerSchema = Joi.object({
      name: Joi.string().min(3).required(),
      email: Joi.string().email().required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{4,14}$"))
        .required(),
    });
    const { error } = registerSchema.validate(req.body);

    if (error) {
      return next(error);
    }
    return res.status(200).json({ data: "done" });
  },
};

export default registerController;
