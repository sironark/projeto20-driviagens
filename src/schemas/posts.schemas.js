import Joi from "joi";

export const createPassenger = Joi.object({
    firstName: Joi.string().required().min(2).max(100),
    lastName: Joi.string().required().min(2).max(100)
});

export const createCity = Joi.object({
    name: Joi.string().required().min(2).max(50)
});

export const createFlight = Joi.object({
    origin: Joi.number().required().min(1),
	destination: Joi.number().required().min(1),
	date: Joi.string().regex(/^\d{2}-\d{2}-\d{4}$/)
});