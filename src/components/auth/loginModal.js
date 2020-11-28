import React, { Component } from "react";
import { Row, Col } from 'antd'
import {Menu,Icon,Modal,Button, Form, Input } from 'antd'
import axios from 'axios'
import {loginUser} from '../../store/actions/authActions'
import {connect} from "react-redux";
class LogInModal extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.loginUser(values)
            }
        });
    };
    render() {

        const {getFieldDecorator} = this.props.form;
        return (
            <Modal
                visible={this.props.openLogIn} title="Log in" onCancel={this.props.onClose} footer={null}>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{required: true, message: 'Please input your username!'}],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Please input your Password!'}],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>

                        <br/>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log In
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
}
const WrappedLoginModal = Form.create({ name: 'login_modal' })(LogInModal)
export default connect(null, {loginUser})(WrappedLoginModal)