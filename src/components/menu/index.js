import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import food3 from '../images/food3.jpg'
import food4 from '../images/food4.jpg'
import food5 from '../images/food5.jpg'
import { Row, Col } from 'antd'
import './menu.css'

function Index() {
    return (
        <div className="menu">
            <Row gutter={10}>
                <Col span={8}>
                    <img src={food3} width="500px"/>
                </Col>
                <Col span={8}>
                    <img src={food4} width="500px"/>
                </Col>
                <Col span={8}>
                    <img src={food5} width="500px"/>
                </Col>
            </Row>
            <Row gutter={10} className="paragraph">
                <Col span={12}>
                    <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue. Cras justo odio, dapibus ac facilisis.

                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur.</p>
                </Col>
                <Col span={12}>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum.

                        Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit luctus sem adipiscing elit.</p>
                </Col>
            </Row>
            <Row>
                <Col span={12} offset={6} className="viewBtn">
                    <Link to="/menu"> <button>View menus</button></Link>
                </Col>
            </Row>
        </div>
    )
}

export default Index