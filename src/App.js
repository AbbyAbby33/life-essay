import React, { Component } from 'react';
import './App.css';
/** Ant Design */
import { Layout, Menu } from 'antd';
const { Header, Content, Sider } = Layout;

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <div>生活小事</div>
        </Header>
        <Content>
          <Layout className="site-layout-background">
            <Sider>
              <Menu style={{ height: 'calc(100vh - 64px)' }}>
              </Menu>
            </Sider>
            <Content style={{ padding: '24px', minHeight: 280 }}>Content</Content>
          </Layout>
        </Content>
      </Layout>
    )
  }
}
