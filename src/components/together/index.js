import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Menu} from 'antd'
import './together.css'

function Index() {
    return (
        <div className="together">
            <Row>
                <Col span={12} offset={6}>
                    <h1>Eat Together</h1>
                    <p>Every plate achieves that elusive, cuisine-defining balance<br/>
                        of sweet, salty, and sour — even dessert.</p>
                    <Link to="/reserv"><button>Make a reservation</button></Link>
                </Col>
            </Row>
        </div>

    )
}

export default Index