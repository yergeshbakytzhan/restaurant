import React, {Component} from 'react'
import {Row, Col, Menu} from 'antd'
import './rooms.css'

function Index() {
    return (
        <div className="rooms">
            <Row className="room-details" type="flex" justify="space-around">
                <Col span={8}>
                    <h2>THE BIG ROOM</h2>
                    <h4>Seats up to 60</h4>
                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper.

                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis risus eget urna mollis ornare vel eu leo. Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue.</p>
                </Col>
                <Col span={8}>
                    <h2>THE SMALL ROOM</h2>
                    <h4>Seats up to 15</h4>
                    <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes.

                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                </Col>
            </Row>
            <Row className="room-contact">
                <Col>
                    <p>Call <b>(347) 555-1234</b> to reserve a room for your reception or party.</p>
                </Col>
            </Row>
        </div>

    )
}

export default Index