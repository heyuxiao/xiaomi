import React from 'react';
import './App.scss';
import {routes} from './router'
import {Route,Switch,Redirect,NavLink,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  HomeOutlined,
  UnorderedListOutlined,
  ShoppingCartOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Badge } from 'antd-mobile';

var mapState=(state)=>{
  return {
      allCount(){
        var all=0
        state.cart.car.forEach(item=>{
            all += item.count
        })
        return all
    }
  }
}
@connect(mapState)
@withRouter
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      visible:true
    }
  }
  render(){
   let {allCount} = this.props
    return (
      <div className="App">
        <main className='main'>
          <Switch>
              {
                routes.map(ele=>{
                  return <Route key={ele.path} path={ele.path} component={ele.component} />
                })
              }
              <Redirect from='/' to='/home' exact/>
              <Redirect to='/404' />
            </Switch>
        </main>
        <footer className='footer' >
              <ul>
                <li><NavLink to='/home'><HomeOutlined />首页</NavLink></li>
                <li><NavLink to='/category'><UnorderedListOutlined />分类</NavLink></li>
       
                <li><NavLink to='/cart'>
                  <Badge text={allCount()}>
                  <ShoppingCartOutlined />
                  </Badge>
                   购物车</NavLink></li>
           
                <li><NavLink to='/user'><UserOutlined />我的</NavLink></li>
               
              </ul>
        </footer>
          
      </div>
    );
  }
}

export default App;
