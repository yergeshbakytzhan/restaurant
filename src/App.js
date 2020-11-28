import qym from './components/images/Q.png'
import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import {Helmet} from "react-helmet";
import Header from './components/header'
import Main from './components/main'
import Destination from './components/destination'
import Together from './components/together'
import Menu from './components/menu'
import Kitchen from './components/kitchen'
import ChefsList from "./components/chefs";
import Footer from "./components/footer"
import Category from "./components/category"
import FoodList from "./components/foods"
import Reserv from "./components/reserv"
import MakeOrder from "./components/makeorder"
import Makereserv from "./components/makereserv"
import Rooms from "./components/rooms"
import Cart from "./components/order"
import News from "./components/news"
import NewsList from "./components/news_list"
import NewsDetails from "./components/news_details"
import {Provider} from 'react-redux'
import {store} from './store'
import jwt_decode from 'jwt-decode'
import {
    BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import {SET_CURRENT_USER} from "./store/actions/types";

if(localStorage.getItem('tokens')){
    const accessToken = JSON.parse(localStorage.getItem('tokens')).access
    const payload = jwt_decode(accessToken)

    store.dispatch({
        type: SET_CURRENT_USER,
        payload: payload.user_id
    })
}

const TITLE = "Qymbattym"


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <Header/>
            <Switch>
                <Route path="/" exact>
                    <Main/>
                    <Destination/>
                    <Together/>
                    <Menu/>
                    <Kitchen/>
                    <Route component = {ChefsList}/>
                </Route>
                <Route exact path="/menu" >
                    <Route component={Category}/>
                    <Route component={FoodList}   />
                </Route>
                <Route path="/order" exact>
                    <MakeOrder/>
                </Route>
                <Route path="/cart">
                    <Route component = {Cart}/>
                </Route>
                <Route path="/reserv" exact>
                    <Reserv/>
                    <Makereserv/>
                    <Rooms/>
                </Route>
                <Route path="/news" exact>
                    <News/>
                    <Route component={NewsList}/>
                </Route>
                <Route component={NewsDetails} path="/foods/:id"/>
            </Switch>
            <Footer/>

        </div>
      </Router>
    </Provider>
  );
}

export default App;
