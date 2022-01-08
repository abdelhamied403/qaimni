import React from "react";
import { Form, Input, Button } from "antd";

import { email, required } from "utils/rules";

const SignupForm = (props) => {
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
          <Form.Item name="name" rules={[required("الاسم مطلوب")]}>
            <Input placeholder="الاسم" size="large" />
          </Form.Item>
        </div>
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
            name="email"
            rules={[
              email("البريد الالكتروني غير صحيح"),
              required("البريد الالكتروني مطلوب"),
            ]}
          >
            <Input placeholder="البريد الالكتروني" size="large" />
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
          <Button type="primary" size="large" htmlType="submit">
            الاشتراك
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
 
export default SignupForm;