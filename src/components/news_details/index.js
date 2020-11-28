import React, { Component } from 'react';
import {Row,Col, Typography, Card, Button, Icon } from 'antd'
import { Comment, Tooltip, List } from 'antd';
import sm from '../images/sm.jpg'
import { Avatar, Form, Input } from 'antd';
import moment from 'moment';
import axios from 'axios'
import {addToCart} from '../../store/actions/cartActions'
import {addToComment, getComment} from "../../store/actions/commentActions";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import './news_details.css'

const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <div>
        <Form.Item>
            <TextArea rows={4} name="commentText" onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Add Comment
            </Button>
        </Form.Item>
    </div>
);
const ButtonGroup = Button.Group
const {Title, Text} = Typography


class NewsDetails extends Component {
    constructor() {
        super()

        this.state= {
            food: {},
            comments: [],
            submitting: false,
            commentText: ``,
            amount: 1,
        }

    }

    changeAmount = val => {
        this.setState({amount: this.state.amount + val})
    }

    componentDidMount() {
        console.log(this.props.match.params.id)
        axios.get(`/api/foods/${this.props.match.params.id}`)
            .then(res => {
                console.log(res.data)
                this.setState({food: res.data})
            })
            .catch(err => {
                console.log(err)
            })
        console.log(this.props.getComment(this.props.match.params.id))
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onClick = () => {
        this.props.addToCart({
            food: this.props.match.params.id,
            amount: this.state.amount,
        })
    }

    handleSubmit = e => {
        this.props.addToComment({
            text: this.state.commentText,
            food: this.props.match.params.id,
        })
        this.state.commentText=``
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({comments: nextProps.comment.comments})
    }np




    render() {
        const {food} = this.state
        return (
            <div className="new-content">
            <div className="content">
                <Row type="flex" justify="space-around" className="content-details">
                    <Col span={10}>
                        <img src={food.img} alt="" width="500px"/>
                        <h1>{food.name}</h1>
                        <p>{food.description}</p>
                    </Col>

                    <Col span={4}>
                        <Card>
                            <Text>Price: {food.price}</Text>
                            <div>
                                <ButtonGroup>
                                    <Button onClick={() => this.changeAmount(-1)}><Icon type="minus" /></Button>
                                    <Button> {this.state.amount} </Button>
                                    <Button onClick={() => this.changeAmount(1)}><Icon type="plus" /></Button>
                                </ButtonGroup>
                            </div>
                            <br/>
                            <Button type="primary" onClick={this.onClick}>Add to Card</Button>
                        </Card>
                    </Col>
                </Row>
                <Comment
                    avatar={
                        <Avatar
                            src={sm}
                            alt="Han Solo"
                        />
                    }
                    content={
                        <Editor
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            submitting={this.state.submitting}
                            value={this.state.commentText}
                        />
                    }
                />
                <List
                    className="comment-list"
                    header={`${this.state.comments.length} replies`}
                    itemLayout="horizontal"
                    dataSource={this.state.comments}
                    renderItem={item => (
                        <li>
                            <Comment
                                author={item.user.username}
                                avatar={sm}
                                content={item.text}
                                datetime={moment(item.date)
                                    .fromNow()}
                            />
                        </li>
                    )}
                />

            </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    comment: state.comment
})
export default connect(mapStateToProps, {addToCart, addToComment, getComment})(withRouter(NewsDetails))