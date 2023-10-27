export function notFoundError(message="Esse item não existe") {
    return {type: "notFound", message };
}

export function incompleteDataError(message) {
    return { message, type: "incompleteData" };
}

export function conflictError(message = "Já existe"){
    return {type:"conflict", message};
}

