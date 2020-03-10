import {getData,getCategory1} from '@/api'

export default {
    getData(){
        return (dispatch)=>{
            getData().then(res=>{
                var list = []
                if(res.code===0){
                    list = res.data.filter(item=>item.type==='kvBanner')[0].list
                }
                dispatch({
                    type:'GETDATA',
                    list
                })
            })
        }
    },
    getGoods(){
        return (dispatch)=>{
            getCategory1().then(res=>{
                if(res.code===0){
                    var good = res.data[0].list
                }
                dispatch({
                    type:'GETGOOD',
                    good
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
