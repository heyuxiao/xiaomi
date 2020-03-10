import React, { Component } from 'react'
import './user.scss'
import {Redirect} from 'react-router-dom'
import { RightOutlined,PayCircleOutlined ,DeliveredProcedureOutlined,ToolOutlined,createFromIconfontCN} from '@ant-design/icons';
const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1672633_a8adl3mmxic.js', // 在 iconfont.cn 上生成
  });

 class User extends Component {
    constructor(props){
        super(props)
        this.state={
            "items":{
                "item1":[
                    {
                        "id":1,
                        "name":"会员中心",
                        "icon":"icon-crown"
                    },
                    {
                        "id":2,
                        "name":"我的优惠",
                        "icon":"icon-wallet"
                    }
                ],
                "item2":[
                    {
                        "id":1,
                        "name":"服务中心",
                        "icon":"icon-heart"
                    },
                    {
                        "id":2,
                        "name":"小米之家",
                        "icon":"icon-home "
                    }
                ],
                "item3":[
                    {
                        "id":1,
                        "name":"我的F码",
                        "icon":"icon-qr"
                    },
                    {
                        "id":2,
                        "name":"礼物兑换码",
                        "icon":"icon-liwu"
                    }
                ],
                "item4":[
                    {
                        "id":1,
                        "name":"设置",
                        "icon":"icon-set"
                    }
                ]
            }
        }
    }
    quit=()=>{
        sessionStorage.clear()
        this.props.history.push('/login')
    }
    render() {
        let {items} =this.state
        return (
            <div>
            {sessionStorage.getItem('user')?
            <div className='user'>
                
                <div className='header'>
                    <div className='us'>
                        <div className='img'>
                            <img src="//s1.mi.com/m/images/m/default.png" alt=''/>
                        </div>
                        <div className='name'>
                            {sessionStorage.getItem('user')}
                        </div>
                        <div className='quit' onClick={this.quit}>退出</div>
                    </div>
                    
                </div>
                <div className='b1'>
                    <p className='cite'>我的订单</p>
                    <p>全部订单</p>
                    <p className='icon'><RightOutlined/></p>
                </div>
                <ul className='b2'>
                    <li><PayCircleOutlined /><span>待付款</span></li>
                    <li><DeliveredProcedureOutlined /><span>待收货</span></li>
                    <li><ToolOutlined /><span>退换修</span></li>
                </ul>
                {
                    Object.keys(items).map(ele=>{
                        
                        return <div key={ele} className='items'>
                            <div className='ui-line'></div>
                            <ul>
                                {
                                    items[ele].map(item=>{
                                        
                                        return <li key={item.id} >
                                         
                                            <MyIcon type={item.icon} className='icon'/>
                                            
                                            <span>{item.name}</span>
                                            <RightOutlined className='right'/>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    })
                }
                
            </div>:<Redirect to='/login' />}
            </div>
        )
    }
}
export default User