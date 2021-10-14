import React, { Component } from 'react';
import './App.css';
/** Ant Design */
import { Layout, Menu } from 'antd';
import { BookOutlined, AreaChartOutlined, MailOutlined } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

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
              <Menu className="le-menu" mode="inline">
                <SubMenu key="sub1" icon={<BookOutlined/>} title="小事管理">
                  <Menu.Item key="1">新增小事</Menu.Item>
                  <Menu.Item key="2">小事列表</Menu.Item>
                  <Menu.Item key="3">小事日曆</Menu.Item>
                  <Menu.Item key="4">隨機小事</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<AreaChartOutlined/>} title="統計分析">
                  <Menu.Item key="5">小事統計</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<MailOutlined />} title="關於專案">
                  <Menu.Item key="6">技術資源</Menu.Item>
                  <Menu.Item key="7">聯絡作者</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content className="le-main-content">Content</Content>
          </Layout>
        </Content>
      </Layout>
    )
  }
}
