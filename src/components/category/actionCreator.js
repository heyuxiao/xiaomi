import {getCategory1} from '@/api'

export default {
    getGoods(){
        return (dispatch)=>{
            getCategory1().then(res=>{
                if(res.code===0){
                    var data = res.data
                }
                dispatch({
                    type:'GETGOODS',
                    data
                })
            })
        }
    },
    product(item){
        return{
            type:'PRODUCT',
            item
        }
    }
}