import { constants } from "../../utils/constant"

export const removeFieldFromRedux = (payload = {}) => {
    return {
        type: constants.REMVOE_FIELD,
        payload
    }
}

export const addFieldFromRedux = (payload = {}) => {
    return {
        type: constants.ADD_FIELD,
        payload
    }
}