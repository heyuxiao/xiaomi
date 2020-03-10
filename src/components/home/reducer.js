const initialState = {
    list:['1','2','3'],
    good:[]
}
export default (state = initialState, { type, list ,good}) => {
    switch (type) {

    case 'GETDATA':
        var newState = {...state}
        newState.list=list
        return newState
    case 'GETGOOD':
        var newState = {...state}
        newState.good = good
        return newState
    default:
        return state
    }
}
