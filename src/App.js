import React, { Component } from 'react';
import './App.css';
/** Ant Design */
import { Layout, Menu } from 'antd';
const { Header, Content, Sider } = Layout;

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Header className="le-header">
          <h1>生活小事</h1>
        </Header>
        <Content>
          <Layout className="site-layout-background">
            <Sider collapsible={true} collapsedWidth={0} breakpoint="lg">
              <Menu className="le-menu">
              </Menu>
            </Sider>
            <Content className="le-main-content">Content</Content>
          </Layout>
        </Content>
      </Layout>
    )
  }
}
