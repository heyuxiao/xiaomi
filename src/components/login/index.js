import React, { Component } from 'react'
import img from '@/logo.png'
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import './login.scss'
export default class Login extends Component {
    handleClick = () => {
        var user = this.autoFocusInst.state.value
        var password = this.inputRef.state.value
        sessionStorage.setItem('user',user)
        sessionStorage.setItem('password',password)
        this.props.history.push('/user')
    }
    render() {
        return (
            <div className='login'>
                <div className='header'>
                    <img src={img} alt=""/>
                    <p>小米账号登录</p>
                </div>
                <div>
                    <List>
                        <InputItem
                            clear
                            placeholder=""
                            ref={el => this.autoFocusInst = el}
                        >账号</InputItem>
                        <InputItem
                            type='password'
                            clear
                            placeholder=""
                            ref={el => this.inputRef = el}
                        >密码</InputItem>
                        <List.Item>
                            <div
                            style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
                            onClick={this.handleClick}
                            >
                            立即登入
                            </div>
                        </List.Item>
                    </List>
                </div>
            </div>
        )
    }
}
