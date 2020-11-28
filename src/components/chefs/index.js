import React, {Component} from 'react'
import food7 from '../images/food7.jpg'
import food8 from '../images/food8.jpg'
import { Row, Col } from 'antd'
import { Card } from 'antd';
import './chefs.css'
import axios from "axios";

class ChefsList extends Component{
    constructor(){
        super()

        this.state= {
            chefs: [],
            count: 0,
            title: "Hello"
        }
    }

    componentDidMount() {
        axios.get('/api/chefs')
            .then(res=>{
                console.log(res.data)
                this.setState({chefs: res.data})
            })
            .catch(err=>{
                console.log(err)
            })
    }

    render () {
        const {chefs} = this.state
        const chefList = chefs.map(item=>(
            <Col span={4}>
                <Card key={item.id} style={{ width: 300 }}>
                    <h1>{item.name}</h1>
                    <h4>{item.state}</h4>
                    <p>{item.description}</p>
                </Card>,
            </Col>
        ))


        return (
            <div className="chefs">
                <Row type="flex" justify="center" className="elements">
                    {chefList}
                </Row>
                <Row type="flex" justify="center">
                    <Col span={8}>
                        <img src={food7} width="600px"/>
                    </Col>
                    <Col span={8}>
                        <img src={food8} width="600px"/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ChefsList