import * as actionType from './actionTypes'

export const addCounter=()=>({
        type:actionType.ADD_COUNTER,
        payload:1  // optional
    }
)

export const reduceCounter=()=>({
        type:actionType.REDUCE_COUNTER,
        payload:1
    }
)