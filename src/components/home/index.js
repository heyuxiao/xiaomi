import React, { Component } from 'react'
import  logo from  '@/logo.png'
import './home.scss'
import {SearchOutlined,UserOutlined,DownOutlined , UpOutlined } from '@ant-design/icons';
import {homeRoutes} from '@/router'
import {Route,Redirect,Switch} from 'react-router-dom'

 class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            visible:true,
            "list":[
                {
                    "id":1,
                    "name":"推荐",
                    "path":"/home/1"
                },
                {
                    "id":2,
                    "name":"手机",
                    "path":"/home/2"
                },
                {
                    "id":3,
                    "name":"智能",
                    "path":"/home/3"
                },
                {
                    "id":4,
                    "name":"电视",
                    "path":"/home/4"
                },
                {
                    "id":5,
                    "name":"笔记本",
                    "path":"/home/5"
                },
                {
                    "id":6,
                    "name":"家电",
                    "path":"/home/6"
                },
                {
                    "id":7,
                    "name":"生活周边",
                    "path":"/home/7"
                }
            ]
        }
    }
    nav(path){
        this.props.history.push(path)
        this.setState({
            visible:true
        })
    }
    change=()=>{
        this.setState({
            visible:!this.state.visible
        })
    }
    search=()=>{
        this.props.history.push('/search')
    }
    render() {
        let {list,visible} = this.state
        return (
            <div className='home'>
                <header className='header'>
                    <div className='logo'>
                        <h1><img src={logo} alt=""/></h1>
                        <div className='search' onClick={this.search}>
                            <div>
                            <SearchOutlined /> 
                            </div>
                            搜索商品名称
                        </div>
                        <div className='user'>
                                <UserOutlined onClick={()=>{this.props.history.push('/user')}} />
                        </div>
                    </div>
                    <div className='nav' style={{display:visible?'block':'none'}}>
                        <ul >
                            {
                                list.map(item=>{
                                    return <li key={item.id} onClick={this.nav.bind(this,item.path)}>
                                        <span className={item.path===this.props.location.pathname?'active':''}>{item.name}</span>
                                            </li>
                                })
                            }
                        </ul>
                        <div className='downout' onClick={this.change}>
                            <DownOutlined />
                        </div>
                    </div> 
                    <div className='nav-wrap' style={{display:!visible?'block':'none'}}>
                        <h3>全部</h3>
                        <ul >
                            {
                                list.map(item=>{
                                    return <li key={item.id} onClick={this.nav.bind(this,item.path)}>
                                        <span className={item.path===this.props.location.pathname?'active':''}>{item.name}</span>
                                        </li>
                                })
                            }
                        </ul>
                        <div className='upout' onClick={this.change}>
                            <UpOutlined />
                        </div>
                        <div className='poput' onClick={this.change}></div>
                    </div>
                </header>
                <div className='main'>
                    <Switch>
                        {
                            homeRoutes.map(ele=>{
                                return <Route key={ele.path} path={ele.path} component={ele.component} />
                            })
                        }
                        <Redirect from='/home' to='/home/1' exact/>
                    </Switch>
                </div>

            </div>
        )
    }
}
export default Home