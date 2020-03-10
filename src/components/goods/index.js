import React, { Component } from 'react'
import {connect} from 'react-redux'
import './goods.scss'
import actionCreator from '../cart/actionCreator'
import {LeftOutlined,SearchOutlined } from '@ant-design/icons';

var mapState = (state)=>{
    return {
        item:state.category.item,
    }
}
@connect(mapState,actionCreator)
class Goods extends Component {
    home=()=>{
        this.props.history.push('/category')
    }
    render() {
        let {id,name,image,desc,price} = this.props.item
        return (
            <div className='good' style={{opacity:id?1:0}}>
                <header className='header'>
                    <div className='header-left' onClick={this.home}><LeftOutlined /></div>
                    <div className='header-title'>商品详情</div>
                    <div className='header-rigth'><SearchOutlined /></div>
                </header>
                <div className='img'><img src={image} alt=""/></div>
                <div className='det'>
                    <p className='name'>{name} </p>
                    <p className='desc'>{desc} </p>
                    <p className='price'>￥{price} </p>
                </div>
                <div className='btn'><button onClick={this.props.addAction.bind(this,{...this.props.item,count:1})}>加入购物车</button></div>
            </div>
        )
    }
}
export default Goods