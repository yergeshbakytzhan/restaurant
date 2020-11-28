import React, {Component} from 'react'
import { Row, Col } from 'antd'
import './footer.css'

function Index() {
    return (
        <div className="footer">
            <Row>
                <Col>

                </Col>
            </Row>
            <Row className="location">
                <Col span={18}>
                    <h1>Locations</h1>
                    <Col span={8}>
                        <p className="name">Brooklyn</p>
                        <p>376 Fake Street</p>
                        <p>Brooklyn, NY — 11231</p>
                        <p>(718) 555-1234</p>
                    </Col>
                    <Col span={8}>
                        <p className="name">Queens</p>
                        <p>47-33 Fake Street</p>
                        <p>Long Island City, NY — 11101</p>
                        <p>(347) 555-1234</p>
                    </Col>
                    <Col span={8}>
                        <p className="name">Food Truck</p>
                        <p>25 Fake Street</p>
                        <p>New York, NY — 10003</p>
                        <p>(917) 555-1234</p>
                    </Col>
                </Col>
                <Col span={6}>
                    <h1>Hours</h1>
                        <Col>
                                <p className="name">Monday — Thursday</p>
                                <p>8am — 11pm</p>
                                <p className="name">Friday — Sunday</p>
                                <p>11am — 11pm</p>
                        </Col>
                </Col>
            </Row>
        </div>
    )
}

export default Index