import React, {Component} from 'react'
import {Row, Col, Menu} from 'antd'
import {withRouter} from "react-router-dom";
import axios from 'axios';
import './category.css'


class Category extends Component{
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

    onClick = (id) => {
        return() => {
            this.props.history.push(`/foods/${id}`)
        }
    }

    componentDidMount() {

        axios.get('/api/foods')
            .then(res => {
                this.setState({foods: res.data})
                console.log(res.data)
            })
            .catch(err => {
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
        const {categories} = this.state
        const categoriesList = categories.map(cat => (
            <li onClick={()=>this.filterByCategory(cat.id)}>{cat.category}</li>
        ))


        return (
            <div className="category">
                <div className="category-details">
                        <h1>Menu</h1>
                        <p>The mission is simple: serve delicious, affordable food that <br/> guests will want to return to week after week.</p>
                </div>
                <span className="dark"></span>
            </div>
        )
    }
}
export default withRouter(Category)