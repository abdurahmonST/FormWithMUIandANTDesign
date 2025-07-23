"use client";

import { useState } from "react";
import { Layout, Input, Button, theme, Form } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [activeTab, setActiveTab] = useState("login");
  const [form] = Form.useForm();

  const handleLogin = (values) => {
    console.log("Login values:", values);
  };

  const TabButton = ({ tabKey, children, isActive }) => (
    <div
      onClick={() => setActiveTab(tabKey)}
      style={{
        padding: "12px 24px",
        color: "#fff",
        cursor: "pointer",
        backgroundColor: isActive ? "#1890ff" : "transparent",
        transition: "background-color 0.3s",
        borderRadius: "2px 2px 0 0",
        fontSize: "14px",
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = "transparent";
        }
      }}
    >
      {children}
    </div>
  );

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#f0f2f5" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "flex-end",
          background: "#001529",
          padding: "0 20px",
          height: "64px",
        }}
      >
        <TabButton tabKey="home" isActive={activeTab === "home"}>
          Home
        </TabButton>
        <TabButton tabKey="login" isActive={activeTab === "login"}>
          Login
        </TabButton>
      </Header>

      <Content style={{ padding: "0", backgroundColor: "#f0f2f5" }}>
        {activeTab === "home" && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "calc(100vh - 134px)",
            }}
          >
            <h2 style={{ color: "#666" }}>Welcome to Home Page</h2>
          </div>
        )}

        {activeTab === "login" && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "calc(100vh - 134px)",
              padding: "20px",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "500px",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  marginBottom: "40px",
                  color: "#666",
                  fontWeight: "normal",
                  fontSize: "18px",
                }}
              >
                Please Login with your Okta Account
              </h2>

              <Form
                form={form}
                name="login"
                onFinish={handleLogin}
                layout="vertical"
                style={{ textAlign: "left" }}
              >
                <Form.Item
                  label={
                    <span style={{ color: "#666", fontSize: "14px" }}>
                      <span style={{ color: "#ff4d4f" }}>* </span>
                      Username :
                    </span>
                  }
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                  style={{ marginBottom: "24px" }}
                >
                  <Input
                    style={{
                      height: "40px",
                      fontSize: "14px",
                      borderRadius: "6px",
                    }}
                  />
                </Form.Item>

                <Form.Item
                  label={
                    <span style={{ color: "#666", fontSize: "14px" }}>
                      <span style={{ color: "#ff4d4f" }}>* </span>
                      Password :
                    </span>
                  }
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                  style={{ marginBottom: "32px" }}
                >
                  <Input.Password
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                    style={{
                      height: "40px",
                      fontSize: "14px",
                      borderRadius: "6px",
                    }}
                  />
                </Form.Item>

                <Form.Item style={{ textAlign: "center", marginBottom: 0 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{
                      width: "100px",
                      height: "40px",
                      backgroundColor: "#1890ff",
                      borderColor: "#1890ff",
                      borderRadius: "6px",
                      fontSize: "14px",
                      fontWeight: "normal",
                    }}
                  >
                    Login
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        )}
      </Content>

      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#f0f2f5",
          color: "#999",
          padding: "24px 0",
          fontSize: "14px",
        }}
      >
        Ant Design ©2020 Created by Ant Design of React using Okta by{" "}
        <span style={{ color: "#1890ff", cursor: "pointer" }}>Nik Fisher</span>
      </Footer>
    </Layout>
  );
};

export default App;
