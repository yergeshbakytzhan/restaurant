import React, {Component} from 'react'
import {Row, Col, Menu} from 'antd'
import food10 from '../images/food10.jpeg'
import './makereserv.css'

function Index() {
    return (
        <div className="makereserv">
            <Row className="makereserv-items1">
                <Col span={12} offset={6}>
                    <h1>MAKE A RESERVATION</h1>
                </Col>
            </Row>
            <Row className="makereserv-items2" type="flex" justify="space-around">
                <Col span={9}>
                    <h1>By phone</h1>
                    <p>Prefer to make your reservation via phone?<br/>
                        Call (347) 555-1234 between 10am and noon.</p>
                </Col>
                <Col span={9}>
                    <h1>SPECIAL EVENTS & PRIVATE PARTIES</h1>
                    <p>Catering and Events are opportunities for us to work more closely<br/>
                    with our guests, occasions for us to share our dedication to<br/>
                    celebration in exciting new ways.</p>
                </Col>
            </Row>
            <Row className="makereserv-image" type="flex" justify="center">
                <Col span={21}>
                    <img src={food10}/>
                </Col>
            </Row>
        </div>

    )
}

export default Index