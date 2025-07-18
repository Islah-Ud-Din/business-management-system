'use client';
import React from 'react';
import type { FormProps } from 'antd';

import { Button, Checkbox, Form, Input } from 'antd';

// Context
import { useUser } from '@/context/UserContext';


type FieldType = {
    email?: string;
    username?: string;
    password?: string;
    remember?: boolean;
};

const LoginFrom: React.FC = () => {
    const { authToken  } = useUser()


    const { setUser } = useUser();

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Form Values:', values);
        setUser(values);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType> label="Email" name="email" rules={[{ required: true, message: 'Please input your Email' }]}>
                <Input />
            </Form.Item>

            <Form.Item<FieldType> label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input />
            </Form.Item>

            <Form.Item<FieldType> label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password />
            </Form.Item>

            <Form.Item<FieldType> name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginFrom;
