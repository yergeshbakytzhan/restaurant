import React, {Component} from "react"
import { Card, Row, Col } from 'antd';
import {withRouter} from "react-router-dom";
import {Link} from 'react-router-dom'
import {getCart, deleteFromCart} from "../../store/actions/cartActions";
import {connect} from 'react-redux'
import "./order.css"

const { Meta } = Card;

class Cart extends Component {
    constructor() {
        super()

        this.state= {
            foods: [],
            count: 0,
            title: "Hello"
        }

    }


    componentDidMount() {
        this.props.getCart()
    }

    render() {
        const {foods} = this.props.cart
        const foodList = foods.map(item => (
            <div className="cart-list-details">
                <img src={item.food.img}/>
                <h1>{item.food.name}</h1>
                <p>{item.food.description}</p>
                <p className="cart-price">Price: {item.food.price}KZT</p>
                <p>Amount: {item.amount}</p>
                <button onClick={()=>this.props.deleteFromCart(item.id)}>Delete</button>
            </div>
        ))


        return (
            <div className="order">
                <div className="order-details">
                    <h1 className="order-h1">Cart</h1>
                    <div className="cart-list">
                        {foodList}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart
})
export default connect(mapStateToProps, {getCart, deleteFromCart})(withRouter(Cart))