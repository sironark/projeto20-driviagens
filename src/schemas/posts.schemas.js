import Joi from "joi";

export const createPassenger = Joi.object({
    firstName: Joi.string().required().min(2).max(100),
    lastName: Joi.string().required().min(2).max(100)
});

export const createCity = Joi.object({
    name: Joi.string().required().min(2).max(50)
});
