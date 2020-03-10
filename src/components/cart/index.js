import React, { Component } from 'react'
import './cart.scss'
import {LeftOutlined,SearchOutlined } from '@ant-design/icons';
import {connect} from 'react-redux'
import actionCreator from './actionCreator'
import { DeleteOutlined} from '@ant-design/icons';

var mapState = (state)=>{
    return {
        car : state.cart.car,
        length:state.cart.car.length,
        allCount(){
            var all=0
            state.cart.car.forEach(item=>{
                all += item.count
            })
            return all
        },
        allMoney(){
            var all=0
            state.cart.car.forEach(item=>{
                all += item.count*item.price
            })
            return all 
        }
    }
}
@connect(mapState,actionCreator)
class Cart extends Component {
    home=()=>{
        this.props.history.push('/home')
    }
    close=()=>{
        if(sessionStorage.getItem('user')){
            this.props.history.push('/user')
        }else{
            this.props.history.push('/login')
        }
    }
    search=()=>{
        this.props.history.push('/search')
    }
    render() {
        let {car,length,comput,allCount,allMoney,remove} = this.props
        return (
            <div className='cart'>
                <header className='header'>
                    <div className='header-left' onClick={this.home}><LeftOutlined /></div>
                    <div className='header-title'>购物车</div>
                    <div className='header-rigth' onClick={this.search}><SearchOutlined /></div>
                </header>
                <div className='goods'>
                    <div style={{display:length?'none':'block'}}>购物车空空如也，快去逛一逛！！！</div>
                    <ul>
                        {
                            car.map(item=>(
                                <li key={item.id}>
                                    <img src={item.image} />
                                    <div className='det'>
                                        <p>{item.name}</p>
                                        <p>{item.desc}</p>
                                        <p>￥{item.price}</p>
                                        <p>
                                            <button onClick={comput.bind(this,-1,item.id)}>-</button>
                                            {item.count}
                                            <button onClick={comput.bind(this,1,item.id)}>+</button>
                                        </p>
                                        <p className='icon'><DeleteOutlined onClick={remove.bind(this,item.id)} /></p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='bottom-submit' style={{zIndex:length?99:-1}}>
                    <div className='price-box'>
                        <span>共{allCount()}件 金额：</span><br/>
                        <strong>{allMoney()}</strong><span>元</span>
                    </div>
                    <div className='black' onClick={this.home}>继续购物</div>
                    <div className='btn' onClick={this.close}>去结算</div>
                </div>
            </div>
        )
    }
}
export default Cart