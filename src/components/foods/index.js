import React, {Component} from 'react'
import { Row, Col } from 'antd'
import { Card } from 'antd';
import {withRouter} from "react-router-dom";
import axios from 'axios';
import './foods.css'

class FoodList extends Component{
    constructor(){
        super()

        this.state= {
            foods: [],
            count: 0,
            title: "Hello",
            search: "",
            categories: [],
            cat_id: 0
        }
    }


    componentDidMount() {
        axios.get('/api/foods')
            .then(res=>{
                console.log(res.data)
                this.setState({foods: res.data})
            })
            .catch(err=>{
                console.log(err)
            })
        axios.get('/api/category')
            .then(res => {
                this.setState({categories: res.data})
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    onClick = (id) => {
        return() => {
            this.props.history.push(`/foods/${id}`)
        }
    }
    onChange = (e) => {
        this.setState({search: e.target.value})
        this.requestBack(e.target.value, this.state.cat_id)
    }
    requestBack = (search, cat_id) => {
        axios.get(`/api/foods/${search}/${cat_id}/search`)
            .then(res => {
                this.setState({foods: res.data})
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    filterByCategory = (cat_id) => {
        this.setState({cat_id})
        this.requestBack(this.state.search, cat_id)
    }


    render () {
        const {foods,categories} = this.state
        const categoriesList = categories.map(cat => (
            <li onClick={()=>this.filterByCategory(cat.id)}>{cat.category}</li>
        ))

        const foodList = foods.map(item=>(
            <Col span={6} key={item.id} onClick={this.onClick(item.id)}>
                <h1>{item.category.category}</h1>
                <Card type="inner" title={item.name} extra={<p>${item.price}</p>}>
                    {item.description}
                </Card>
            </Col>
        ))


        return (
            <div className="foods">
                <form className="search" action="">
                    <input value={this.state.search} onChange={this.onChange} type="text" placeholder="Search here..." required/>
                    <button type="submit">Search</button>
                </form>
                <Row gutter = {[10,10]}>
                    {foodList}
                </Row>

            </div>
        )
    }
}

export default withRouter(FoodList)