import { ACTIONS } from "./ActionType";

export const addDigits = (digits) => {
    return {
        type: ACTIONS.ADD_DIGITS,
        payload: digits
    }
}

export const allClear = () => {
    return {
        type: ACTIONS.ALL_CLEAR,
    }
}

export const deleteDigit = () => {
    return {
        type: ACTIONS.DELETE_DIGIT,
    }
}
export const addOperator = (operator) => {
    return {
        type: ACTIONS.ADD_OPERATOR,
        payload: operator
    }
}

export const calculation = () => {
    return {
        type: ACTIONS.CALCULATION,
    }
}