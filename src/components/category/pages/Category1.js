import React, { Component } from 'react'
import './list.scss'
import {connect} from 'react-redux'
import actionCreator from '../actionCreator'

var mapState=(state)=>state
@connect(mapState,actionCreator)
 class Category1 extends Component {
    componentDidMount(){
       this.props.getGoods()
    }
    goods(item){
        this.props.product(item)
        this.props.history.push('/goods')
    }
    render() {
        let category1 = this.props.category.data
        return (   
            <div className='list-item'>
                {
                    category1.map((item,idx)=>{
                        return <div key={idx} className='list-main'>
                            <div className='title'><span>{item.title}</span></div>
                            <div className='box'>
                                {
                                    item.list.map(ele=>{
                                        return <div key={ele.id} className='product' onClick={this.goods.bind(this,ele)}>
                                                    <div className='img'><img src={ele.image} alt=''/></div>
                                                    <div className='name'>{ele.name}</div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    })
                }
            </div>
        )
    }
}
export default Category1