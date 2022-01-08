import React from 'react';
import { Form, Input, Button, Checkbox } from "antd";
import { required } from "utils/rules";
import { useNavigate } from 'react-router-dom';

const LoginForm = (props) => {
  const navigate = useNavigate();

  const submit = (values) => {
    console.log("Success:", values);
  };

  const onFailure = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={`form ${props.className}`}>
      <Form onFinish={submit} onFinishFailed={onFailure}>
        <div className="my-4">
          <Form.Item
            name="username"
            rules={[required("اسم المستخدم مطلوب")]}
          >
            <Input placeholder="اسم المستخدم" size="large" />
          </Form.Item>
        </div>
        <div className="my-4">
          <Form.Item
            name="password"
            rules={[required("كلمة السر مطلوبه")]}
          >
            <Input.Password placeholder="كلمة السر" size="large" />
          </Form.Item>
        </div>

        <Form.Item
          name="remember"
          default={false}
          valuePropName="checked"
        >
          <div className="flex justify-between items-center">
            <Checkbox default={false}>تذكرني</Checkbox>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              onClick={() => navigate("/")}
            >
              دخول
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}
 
export default LoginForm;