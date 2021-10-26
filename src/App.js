import React, { Component } from 'react';
import './App.less';
import { BookOutlined, AreaChartOutlined, MailOutlined } from '@ant-design/icons';
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history';

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

    state = {
        openKeys: '',
        selectedKeys: '',
        history: createBrowserHistory()
    }

    /** 二級選單被按 */
    menuItemClick = (event) => {
        // console.log('event', event);
        // console.log('window.location', window.location);
        this.setState({
            openKeys: event.key.split('/')[1],
            selectedKeys: event.key
        });
    }

    /** 一級選單被按 */
    subMenuItemClick = (event) => {
        // console.log('this.state', this.state);
        // console.log('event', event);
        this.setState({
            openKeys: event.key,
        });
    }

    componentDidMount() {
        // 2021/10/27：改成HashRouter後，要處理第一次刷新時顯示
        // console.log('2021/10/27----------------------window.location', window.location);
        const path = window.location.hash;
        if (path) {
            this.setState({
                openKeys: path.split('/')[1],
                selectedKeys: path.split('#')[1],
            });
        } 

        // 處理刷新時menu UI
        const { history } = this.state;
        console.log('2021/10/26----------------------history', history);
        // this.setState({
        //     openKeys: history.location.pathname.split('/')[1],
        //     selectedKeys: history.location.pathname
        // });
   
        // history.listen(location => {
        //     // 監聽直接按瀏覽器上一頁下一頁事件處理menu UI
        //     // console.log(location.pathname);
        //     const { pathname } = location;
        //     if (pathname) {
        //         this.setState({
        //             openKeys: pathname.split('/')[1],
        //             selectedKeys: pathname
        //         });
        //     }
        // })
    }

    render() {
        return (
            <Layout>
                <Header className="le-header">
                    <div className="le-logo-img-wrap">
                        <img src={`${process.env.PUBLIC_URL}/el-logo.png`} alt="essay-img"></img>
                    </div>
                    <h1>
                        生活小事
                    </h1>
                </Header>
                <Content>
                    <Layout className="site-layout-background">
                        <Sider collapsible={true} collapsedWidth={0} breakpoint="lg">
                            <Menu
                                className="le-menu" mode="inline"
                                // defaultOpenKeys={[window.location.pathname.split('/')[1]]}
                                // defaultSelectedKeys={[window.location.pathname]}
                                openKeys={[this.state.openKeys]}
                                selectedKeys={[this.state.selectedKeys]}
                                onClick={(event) => this.menuItemClick(event)}
                            >
                                <SubMenu
                                    key="essay-manage"
                                    icon={<BookOutlined />}
                                    title="小事管理"
                                    onTitleClick={(event) => { this.subMenuItemClick(event) }}
                                >
                                    <Menu.Item key="/essay-manage/random-essay">
                                        <span>小事卡片</span>
                                        <NavLink to="/essay-manage/random-essay" />
                                    </Menu.Item>
                                    <Menu.Item key="/essay-manage/essay-list">
                                        <span>小事列表</span>
                                        <NavLink to="/essay-manage/essay-list" />
                                    </Menu.Item>
                                    <Menu.Item key="/essay-manage/essay-calendar">
                                        <span>小事日曆</span>
                                        <NavLink to="/essay-manage/essay-calendar" />
                                    </Menu.Item>
                                    <Menu.Item key="/essay-manage/create-esssay">
                                        <span>新增小事</span>
                                        <NavLink to="/essay-manage/create-esssay" />
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="essay-statistics"
                                    icon={<AreaChartOutlined />}
                                    title="統計分析"
                                    onTitleClick={(event) => { this.subMenuItemClick(event) }}
                                >
                                    <Menu.Item key="/essay-statistics/statistics-analysis">
                                        <span>小事統計</span>
                                        <NavLink to="/essay-statistics/statistics-analysis" />
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="about-project"
                                    icon={<MailOutlined />}
                                    title="關於專案"
                                    onTitleClick={(event) => { this.subMenuItemClick(event) }}
                                >
                                    <Menu.Item key="/about-project/technical-resources">
                                        <span>技術資源</span>
                                        <NavLink to="/about-project/technical-resources" />
                                    </Menu.Item>
                                    <Menu.Item key="/about-project/contact-developer">
                                        <span>聯絡開發者</span>
                                        <NavLink to="/about-project/contact-developer" />
                                    </Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content className="le-main-content">
                            <Switch>
                                <Route path="/essay-manage/create-esssay" component={CreateEssay} />
                                <Route path="/essay-manage/essay-list" component={EssayList} />
                                <Route path="/essay-manage/essay-calendar" component={EssayCalendar} />
                                <Route path="/essay-manage/random-essay" component={RandomEssay} />
                                <Route path="/essay-statistics/statistics-analysis" component={StatisticsAnalysis} />
                                <Route path="/about-project/technical-resources" component={TechnicalResources} />
                                <Route path="/about-project/contact-developer" component={ContactDeveloper} />
                                <Redirect to="/essay-manage/random-essay" />
                            </Switch>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
        )
    }
}
