import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import {connect} from 'react-redux'
import actionCreator from '../actionCreator'

var mapState=(state)=>{
    return {
        list:state.home.list,
        good:state.home.good
    }
}
@connect(mapState,actionCreator)
 class Home1 extends Component {
     constructor(props){
         super(props)
         this.state={
             navImg:[
                 '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152',
                 '//i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e.webp',
                 '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8a3d25fdc76472277b6d342d12aa7ebe.jpg?thumb=1&w=144&h=152',
                 '//i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee.webp',
                 '//i8.mifile.cn/v1/a1/7dbcbf87-6a58-adb6-2f3f-bb3dae3e9c80.webp',
                 '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/64f3988b6216e4c1ab62a7f50df3e816.png?thumb=1&w=144&h=152',
                 '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?thumb=1&w=144&h=152',
                 '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?thumb=1&w=144&h=152',
                 '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9425031cdd7af22d9a23a5ae16d1f57c.jpg?thumb=1&w=144&h=152',
                 '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?thumb=1&w=144&h=152'
             ]
         }
     }
     componentDidMount(){
         this.props.getData() 
         this.props.getGoods()
     }
     goods(item){
        this.props.product(item)
        this.props.history.push('/goods')
    }
    render() {
        let {list,good} = this.props
        let {navImg} = this.state
        return (
            <div className='home1'>
                <WingBlank style={{margin:0}}>
                    <Carousel
                    autoplay={true}
                    infinite={true}
                    slideWidth={1}
                    >
                    {list.map(val => (
                        <img
                            key={val}
                            src={val}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                        />
                    ))}
                    </Carousel>
                </WingBlank>
                <div className='imgNav'>
                    <ul>
                        {
                            navImg.map((item,idx)=>{
                                return <li key={idx}>
                                    <img src={item} alt=""/>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className='divider_line'></div>
                <div className='cells_auto_fill'>
                    <div className='img1'><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d692a30ee3d586c4274575eec255d3c5.jpg?thumb=1&w=358&h=508" alt=""/></div>
                    <div className='img2'>
                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4aea81c738383c9787b49c3d5e6a7ab0.jpg?thumb=1&w=358&h=252" alt=""/>
                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/267e988a99b5cf4e960747e8aa5fa831.jpg?thumb=1&w=358&h=252" alt=""/>
                    </div>
                </div>
                <div className='divider_line'></div>
                <div className='cells_auto_fill'>
                    <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/db805b273547d3c17f624f6aa7a8d3da.jpg?thumb=1&w=720&h=280" alt=""/>
                </div>
                <div className='divider_line'></div>
                <div className='cells_auto_fill'>
                    <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e32eea5c3c27062019f9ac6434b351df.jpg?thumb=1&w=720&h=440" alt=""/>
                </div>
                <div className='good_list'>
                    {
                        good.map((item,idx)=>{
                           return <div key={idx} className='good'>
                                    <div className='img'><img src={item.image} alt=""/></div>
                                    <div className='det'>
                                        <p className='name'>{item.name} </p>
                                        <p className='desc'>{item.desc} </p>
                                        <p className='price'>￥{item.price} </p>
                                        <p className='btn'><button onClick={this.goods.bind(this,item)}>立即购买</button></p>
                                    </div>
                                    
                                </div>
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Home1