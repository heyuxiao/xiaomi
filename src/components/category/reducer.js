const initialState = {
    data:[],
    item:{}
}
export default (state = initialState, { type,data,item}) => {
    switch (type) {

    case 'GETGOODS':
        var newState = {...state}
        newState.data = data
        return newState
    case 'PRODUCT':
        var newState = {...state}
        newState.item = item
        return newState
    default:
        return state
    }
}
