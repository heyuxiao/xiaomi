import React, { Component } from 'react'
import { SearchBar,Flex } from 'antd-mobile';
import {LeftOutlined } from '@ant-design/icons';
import './search.scss'
import {connect} from 'react-redux'
import actionCreator from '../category/actionCreator'

var mapState=(state)=>{
    return {
        data:state.category.data
    }
}
@connect(mapState,actionCreator)
 class Search extends Component {
     constructor(props){
         super(props)
         this.state={
             list:[],
            visible:false
         }
     }
    componentDidMount() {
        this.autoFocusInst.focus();
        this.props.getGoods()
    }
    back=()=>{
        this.props.history.go(-1)
    }
    onSubmit=(val)=>{
        var list =  this.props.data.map(ele=>{
            return ele.list.filter((item)=>{
                 return item.name.includes(val)
            })
        })
        var arr=list.filter(ele=>{
            return ele.length
        })
        if(arr.length===0){
            this.autoFocusInst.state.value = ''
            this.setState({
                visible:true
            })
        }else{
            this.setState({
                list,
                visible:false
            })
        }
    }
    goods(item){
        this.props.product(item)
        this.props.history.push('/goods')
    }
    render() {
        let {list,visible} = this.state
        return (
            <div className='search'>
                <Flex className='header'>
                <div className='left' onClick={this.back}><LeftOutlined /></div>
                <div className='sea'><SearchBar placeholder="搜索商品名称" ref={ref => this.autoFocusInst = ref} onSubmit={this.onSubmit}/></div>
                </Flex>
                <div className='goods_list'>
                    <div style={{display:visible?'block':'none'}}>没有此商品</div>
                    <ul>
                        {
                            list.map((ele)=>{
                            return ele.map((item,idx)=>{
                                    return <li key={idx}>
                                    <img src={item.image} />
                                    <div className='det'>
                                        <p className='name'>{item.name}</p>
                                        <p className='desc'>{item.desc}</p>
                                        <p className='price'>￥{item.price}</p>
                                        <p className='btn' onClick={this.goods.bind(this,item)}><button>立即购买</button></p>
                                    </div>
                                </li>
                                })
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default Search