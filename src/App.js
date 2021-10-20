import React, { Component } from 'react';
import './App.less';
import { BookOutlined, AreaChartOutlined, MailOutlined } from '@ant-design/icons';
import { Route, Link, Redirect } from "react-router-dom";

// 頁面
import CreateEssay from './pages/EssayMange/CreateEssay';
import EssayList from './pages/EssayMange/EssayList';
import EssayCalendar from './pages/EssayMange/EssayCalendar';
import RandomEssay from './pages/EssayMange/RandomEssay';
import StatisticsAnalysis from './pages/EssayStatistics/StatisticsAnalysis';
import TechnicalResources from './pages/AboutProject/TechnicalResources';
import ContactDeveloper from './pages/AboutProject/ContactDeveloper';

// Ant Design
import { Layout, Menu } from 'antd';
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

export default class App extends Component {

    stats = {
        menuHighlight: '1'
    }

    /** 選單被按 */
    menuItemClick = (event) => {
        // console.log('event', event);
        // console.log('window.location', window.location);
        this.setState({ menuHighlight: event.key });
    }

    render() {
        return (
            <Layout>
                <Header className="le-header">
                    <h1>生活小事</h1>
                </Header>
                <Content>
                    <Layout className="site-layout-background">
                        <Sider collapsible={true} collapsedWidth={0} breakpoint="lg">
                            {/* <Menu className="le-menu" mode="inline" selectedKeys={[this.state?.menuHighlight]} onClick={(event) => this.menuItemClick(event)}> */}
                            <Menu
                                className="le-menu" mode="inline"
                                selectedKeys={[window.location.pathname]}
                                onClick={(event) => this.menuItemClick(event)}
                            >
                                {/* <Menu className="le-menu" mode="inline"> */}
                                <SubMenu key="sub1" icon={<BookOutlined />} title="小事管理">
                                    <Menu.Item key="/create-esssay">
                                        <span>新增小事</span>
                                        <Link to="/create-esssay" />
                                    </Menu.Item>
                                    <Menu.Item key="/essay-list">
                                        <span>小事列表</span>
                                        <Link to="/essay-list" />
                                    </Menu.Item>
                                    <Menu.Item key="/essay-calendar">
                                        <span>小事日曆</span>
                                        <Link to="/essay-calendar" />
                                    </Menu.Item>
                                    <Menu.Item key="/random-essay">
                                        <span>隨機小事</span>
                                        <Link to="/random-essay" />
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<AreaChartOutlined />} title="統計分析">
                                    <Menu.Item key="/statistics-analysis">
                                        <span>小事統計</span>
                                        <Link to="/statistics-analysis" />
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<MailOutlined />} title="關於專案">
                                    <Menu.Item key="/technical-resources">
                                        <span>技術資源</span>
                                        <Link to="/technical-resources" />
                                    </Menu.Item>
                                    <Menu.Item key="/contact-developer">
                                        <span>聯絡開發者</span>
                                        <Link to="/contact-developer" />
                                    </Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content className="le-main-content">
                            <Route exact path="/create-esssay" component={CreateEssay} />
                            <Route exact path="/essay-list" component={EssayList} />
                            <Route exact path="/essay-calendar" component={EssayCalendar} />
                            <Route exact path="/random-essay" component={RandomEssay} />
                            <Route exact path="/statistics-analysis" component={StatisticsAnalysis} />
                            <Route exact path="/technical-resources" component={TechnicalResources} />
                            <Route exact path="/contact-developer" component={ContactDeveloper} />
                            {/* <Redirect to="/create-esssay" /> */}
                        </Content>
                    </Layout>
                </Content>
            </Layout>
        )
    }
}
