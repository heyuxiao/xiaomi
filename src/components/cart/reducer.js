const initialState = {
    car:[]
}

export default (state = initialState, { type, p,n,id }) => {
    switch (type) {

    case 'ADD':
        var newState = {...state}
        if(newState.car.length===0){   //如果购物车为空 直接加入
            newState.car.push(p)
        }else{
            var idx = newState.car.findIndex(item=>item.id===p.id)
            if(idx===-1){   //购物车不为空，但没有添加过该商品 ,直接加入
                newState.car.push(p)
            }else{       //购物车不为空，但有添加过商品 ,数量+1
                newState.car[idx].count++
            }
        }
        return newState
    case 'COMPUT':
        var newState = JSON.parse(JSON.stringify(state))
        var idx = newState.car.findIndex((item)=>item.id===id)
        if(newState.car[idx].count>1){
            newState.car[idx].count += n
        }else{
            if(n<0){
                newState.car.splice(idx,1)
            }else{
                newState.car[idx].count += n
            }
        }
        return newState
    case 'DEL':
        var newState = {...state}
        var idx = newState.car.findIndex((item)=>item.id===id)
        newState.car.splice(idx,1)
        return newState
    default:
        return state
    }
}
