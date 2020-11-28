import React, {Component} from 'react'
import { Row, Col } from 'antd'
import './destination.css'

function Index() {
    return (
        <div className="destination">
            <Row>
                <Col span={12} offset={6}>
                    <h4>A destination</h4>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl<br/>
                        consectetur et. Vivamus sagittis lacus vel augue laoreet<br/>
                        rutrum faucibus dolor auctor. Nullam quis risus eget urna<br/>
                        mollis ornare vel eu leo. Aenean lacinia bibendum nulla<br/>
                        sed consectetur.
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default Index