import httpStatus from "http-status"

export async function errorHandler(error, req, res, next) {
    console.log(error);
    if (error.type === "notFound") {
        return res.status(httpStatus.NOT_FOUND).send(error.message);
    }

    if (error.type === "incompleteData") {
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
    }

    if(error.type === "conflict"){
        return res.status(httpStatus.CONFLICT).send(error.message);
    }

    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR).send("Something is rong...");
}