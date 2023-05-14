
export const getValidationError = (errorCode) => {

    const errors = {
        USER_NOT_FOUND: "El usuario no existe",
    }

    return errors[errorCode] || "ERROR INTERNO DEL SERVIDOR";
}