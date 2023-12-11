
import { ACTIONS } from "./ActionType"
const initialState = {
    displayValue: "0",
    calValue: undefined,
    operator: undefined
}

const CalReducer = (state = initialState, { type, payload }) => {
    const calculation = ({ displayValue, calValue, operator }) => {
        const dis = parseFloat(displayValue)
        const cal = parseFloat(calValue)
        switch (operator) {
            case "+":
                return cal + dis
            case "-":
                return cal - dis
            case "×":
                return cal * dis
            case "÷":
                return cal / dis
            default:
                break;
        }
    }
    switch (type) {
        case ACTIONS.ADD_DIGITS:
            if (payload === "." && !state.displayValue) return state
            if (state.displayValue === "0" && payload === ".") return {
                ...state,
                displayValue: `${state.displayValue || ""}${payload}`
            }
            if (state.displayValue === "0" && payload === "0") return state
            if (state.displayValue === "0" || !state.displayValue) {
                return {
                    ...state,
                    displayValue: payload
                }
            }
            if (state.displayValue.includes(".") && payload === ".") return state

            return {
                ...state,
                displayValue: `${state.displayValue || ""}${payload}`
            }

        case ACTIONS.ADD_OPERATOR:

            if (state.displayValue && !state.calValue) {

                return {
                    operator: payload,
                    calValue: state.displayValue,
                    displayValue: "0"
                }
            }

            if (payload === state.operator) {
                return {
                    operator: payload,
                    calValue: calculation(state),
                    displayValue: "0"
                }
            }
            if (payload !== state.operator) {
                return {
                    operator: payload,
                    calValue: calculation(state),
                    displayValue: "0"
                }
            }
            return {
                operator: payload,
                calValue: calculation(state),
                displayValue: "0"
            }

        case ACTIONS.CALCULATION:
            if (state.displayValue && state.calValue && state.operator) {
                return {
                    operator: state.operator,
                    displayValue: "0",
                    calValue: calculation(state),
                }
            }
            return state

        case ACTIONS.ALL_CLEAR:
            return {
                displayValue: "0",
                calValue: undefined,
                operator: undefined
            }


        case ACTIONS.DELETE_DIGIT:
            if (state.displayValue === "0" || state.displayValue.length == 1) {
                return {
                    ...state,
                    displayValue: "0"
                }
            }
            if (!state.displayValue) return state


            return {
                ...state,
                displayValue: state.displayValue.slice(0, -1)
            }
        default:
            return state
    }
}

export default CalReducer