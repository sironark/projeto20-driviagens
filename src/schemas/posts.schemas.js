import Joi from "joi";

export const createPassenger = Joi.object({
    firstName: Joi.string().required().min(2).max(100),
    lastName: Joi.string().required().min(2).max(100)
});

