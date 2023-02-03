import { constants } from "../../utils/constant"

const initialState = {
}

export const formData = (state = initialState, action) => {
    const { payload, type } = action
    switch (type) {
        case constants.ADD_FIELD:
            return {
                ...state, ...payload
            }
        case constants.REMVOE_FIELD:
            return {}
        default: return state
    }
}