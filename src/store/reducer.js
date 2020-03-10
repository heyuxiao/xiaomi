import {combineReducers} from 'redux'
import homeReducer from '@/components/home/reducer'
import categoryReducer from '@/components/category/reducer'
import userReducer from '@/components/user/reducer'
import cartReducer from '@/components/cart/reducer'

var reducer = combineReducers({
    home:homeReducer,
    category:categoryReducer,
    cart:cartReducer,
    user:userReducer
})

export default reducer