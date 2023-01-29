import React, { useEffect, useState } from "react";
import "../resourses/layout.css";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  HomeOutlined,
  CopyOutlined,
  UnorderedListOutlined,
  LoginOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const { Header, Sider, Content } = Layout;

const DefaultLayout = (props) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const { cartItems } = useSelector((state) => state.rootReducer);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h3>Supper Shop</h3>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={window.location.pathname}
        >
          <Menu.Item key="/home" icon={<HomeOutlined />}>
            <Link to="/home" className="text-decoration-none">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="/cart" icon={<ShoppingCartOutlined />}>
            <Link to="/cart" className="text-decoration-none">
              Cart
            </Link>
          </Menu.Item>
          <Menu.Item key="/bills" icon={<CopyOutlined />}>
            <Link to="/bills" className="text-decoration-none">
              Bills
            </Link>
          </Menu.Item>
          <Menu.Item key="/items" icon={<UnorderedListOutlined />}>
            <Link to="/items" className="text-decoration-none">
              Items
            </Link>
          </Menu.Item>
          <Menu.Item key="/customers" icon={<UserOutlined />}>
            <Link to="/customers" className="text-decoration-none">
              Customers
            </Link>
          </Menu.Item>
          <Menu.Item
            key="/logout"
            icon={<LoginOutlined />}
            onClick={() => {
              localStorage.removeItem("pos-user");
              navigate("/login");
            }}
          >
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 10,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div
            className="cart-count d-flex align-items-center"
            onClick={() => navigate("/cart")}
          >
            <b>
              {" "}
              <p className="mt-3 mr-2">{cartItems.length}</p>
            </b>
            <ShoppingCartOutlined />
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
