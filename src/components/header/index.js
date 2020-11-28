import React, {Component} from 'react'
import { Row, Col } from 'antd'
import './header.css'
import {Link} from 'react-router-dom'
import SignUpModal from '../auth/signupModal'
import {logoutUser} from '../../store/actions/authActions'
import LogInModal from "../auth/loginModal";
import {connect} from 'react-redux'
import signs from '../images/signs.png'
import carts from '../images/cart.png'
import qymbat from '../images/Qymbattym.png'


class Header extends Component {
    constructor() {
        super()
        this.state = {
            openLogIn: false,
            openSignUp: false,
        }
    }
    openLogIn = () => {
        this.setState({openLogIn: true})
    }
    openSignUp = () => {
        this.setState({openSignUp: true})
    }
    closeSignUp = () => {
        this.setState({openSignUp: false})
    }
    closeLogIn = () => {
        this.setState({openLogIn: false})
    }

    componentWillReceiveProps(nextProps) {
        console.log("Hello", nextProps)
        if (nextProps.auth.isAuthenticated) {
            this.setState({openLogIn: false, openSignUp: false})
        }
    }

    render() {

        const isAuth = this.props.auth.isAuthenticated;
        const cart = this.props.cart.amount;
        let authMenu = (
            <div className="header-details">
                <div className="header-img">
                    <Link to="/"><img src={qymbat}/></Link>
                </div>
                <div className="header-links">
                    <Link to="/"><button>Home</button></Link>
                    <Link to="/menu"><button>Menu</button></Link>
                    <Link to="/reserv"><button>Reservations</button></Link>
                    <Link to="/news"><button>News</button></Link>
                </div>
                <div className="header-auth">
                    <button onClick={this.openSignUp}>Sign up</button>
                    <span>|</span>
                    <button key={2} onClick={this.openLogIn}>Log in</button>
                </div>
            </div>
        )
        if (isAuth)
            authMenu = (
                <div className="header-details">
                    <div className="header-img">
                        <Link to="/"><img src={qymbat}/></Link>
                    </div>
                    <div className="header-links">
                        <Link to="/"><button>Home</button></Link>
                        <Link to="/menu"><button>Menu</button></Link>
                        <Link to="/reserv"><button>Reservations</button></Link>
                        <Link to="/news"><button>News</button></Link>
                    </div>
                    <div className="header-cart">
                        <button onClick={this.props.logoutUser}><img src={signs}/></button>
                        <Link to="/cart"><button><img src={carts}/> {cart} <span>{this.props.cart.foods.length}</span></button></Link>
                    </div>
                </div>
            )

        return (
            <header className="header">
                <SignUpModal openSignUp={this.state.openSignUp} onClose={this.closeSignUp}/>
                <LogInModal openLogIn={this.state.openLogIn} onClose={this.closeLogIn}/>
                <div className="header-contain">
                    {authMenu}
                </div>
            </header>
        )
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    cart: state.cart
})
export default connect(mapStateToProps, {logoutUser})(Header)