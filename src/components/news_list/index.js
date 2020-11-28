import React, {Component} from 'react'
import { Row, Col } from 'antd'
import {withRouter} from "react-router-dom";
import axios from 'axios';
import './news_list.css'

class NewsList extends Component{
    constructor(){
        super()

        this.state= {
            foods: [],
            count: 0,
            title: "Hello"
        }
    }

    onClick = (id) => {
        return() => {
            this.props.history.push(`/foods/${id}`)
        }
    }

    componentDidMount() {
        axios.get('/api/foods/')
            .then(res=>{
                console.log(res.data)
                this.setState({foods: res.data})
            })
            .catch(err=>{
                console.log(err)
            })
    }


    render () {
        const {foods} = this.state
        const foodList = foods.map(item=>(
            <Col key={item.id} onClick={this.onClick(item.id)}>
                <img src={item.img} width="500px"/>
                <h1>{item.name}</h1>
            </Col>
        ))


        return (
            <div className="foods">
                <Row>
                    {foodList}
                </Row>
            </div>
        )
    }
}

export default withRouter(NewsList)