import React, { Component } from 'react'
import {LeftOutlined,SearchOutlined } from '@ant-design/icons';
import './category.scss'
import {categoryRoutes} from '@/router'
import {Route,Redirect,Switch} from 'react-router-dom'


 class Category extends Component {
     constructor(props){
         super(props)
         this.state={
            "list":[
                {
                    "id":1,
                    "name":"新品",
                    "path":"/category/1"
                },
                {
                    "id":2,
                    "name":"小米手机",
                    "path":"/category/2"
                },
                {
                    "id":3,
                    "name":"Redim",
                    "path":"/category/3"
                },
                {
                    "id":4,
                    "name":"黑鲨",
                    "path":"/category/4"
                },
                {
                    "id":5,
                    "name":"电视",
                    "path":"/category/5"
                },
                {
                    "id":6,
                    "name":"大家电",
                    "path":"/category/6"
                },
                {
                    "id":7,
                    "name":"电脑办公",
                    "path":"/category/7"
                }
            ]
         }
     }
    change(path){
        
        this.props.history.push(path)
    }
    home=()=>{
        this.props.history.push('/home')
    }
    search=()=>{
        this.props.history.push('/search')
    }
    render() {
        let {list} = this.state
        return (
            <div className='category'>
                <header className='header'>
                    <div className='header-left' onClick={this.home}><LeftOutlined /></div>
                    <div className='header-title'>分类</div>
                    <div className='header-rigth' onClick={this.search}><SearchOutlined /></div>
                </header>
                <div className='container'>
                    <div className='list-navbar'>
                        <ul>
                            {
                                list.map(item=>{
                                return <li key={item.id} onClick={this.change.bind(this,item.path)} className={item.path===this.props.location.pathname?'active':''}>
                                    <span>{item.name}</span></li>
                                })
                            }
                        </ul>
                    </div>
                    <div className='list-wrap'>
                        <Switch>
                        {
                            categoryRoutes.map((ele,idx)=>{
                                return <Route key={idx} path={ele.path} component={ele.component} />
                            })
                        }
                        <Redirect from='/category' to='/category/1' exact/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
export default Category