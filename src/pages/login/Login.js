import {Input, Button, Form, Checkbox} from "antd";
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {connect} from "react-redux";
import {setUser} from "@/store/actions";
import "./index.scss";

const Login = function (props) {
  const {username, password, remember, setUser, history} = props;
  const [form] = Form.useForm();
  form.setFieldsValue({
    username,
    password,
    remember
  });
  const handleLogin = (values) => {
    console.log(values)
    const userInfo = {
      ...values,
      token: new Date().getTime()
    }
    if(values.remember) {
      setUser(userInfo);
    }else {
      setUser({
        ...userInfo,
        password: ""
      });
    }
    history?.push("/home");
  }
  return (
    <Form
      className="login-form"
      form={form}
      labelCol={{span: 8}}
      wrapperCol={{span: 16}}
      onFinish={handleLogin}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{required: true, message: 'Please input your username!'}]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon"/>}/>
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{required: true, message: 'Please input your password!'}]}
      >
        <Input.Password prefix={<LockOutlined className="site-form-item-icon"/>}/>
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item wrapperCol={{offset: 8, span: 16}}>
        <Button type="primary" htmlType="submit">
          log in
        </Button>
      </Form.Item>
    </Form>
  )
}
export default connect(state => {
  return {
    ...state.user
  }
},  {
  setUser
})(Login)
