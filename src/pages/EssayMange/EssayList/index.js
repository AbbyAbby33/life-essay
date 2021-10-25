import React, { Component } from 'react';
import { Table, PageHeader, Button, Rate } from 'antd';
import EssayModal from '../../../components/EssayModal';
import { HeartFilled } from '@ant-design/icons';
import store from '../../../redux/store';

export default class EssayList extends Component {

    state = {
        essayModalVisible: false,
        essayDetail: {},
        columns: [
            {
                title: '標題',
                dataIndex: 'title'
            },
            {
                title: '日期',
                dataIndex: 'date'
            },
            {
                title: '開心指數',
                dataIndex: 'happiness',
                // defaultSortOrder: 'descend',
                sorter: (a, b) => a.happiness - b.happiness,
                render: (item) => (
                    <Rate disabled defaultValue={item} character={<HeartFilled />} style={{ color: '#ff6b6b' }} />
                ),
            },
            {
                title: '功能',
                key: 'action',
                render: (item) => (
                    <div>
                        <Button type="primary" onClick={($event) => this.essayClick($event, item)}>
                            小事詳情
                        </Button>
                    </div>
                ),
            },
        ],
        essayList: []
    }

    // wrapper = React.createRef();

    componentDidMount() {
        const essayList = store.getState();
        // console.log('essayList', essayList);
        this.setState({ essayList: essayList });

        store.subscribe(() => {
            this.setState({}); // 重調render()，但在這個專案不會用到
        });
    }

    /** 小事被點擊 */
    essayClick(event, item) {
        // console.log('event', event, 'item', item);
        this.setModalVisible(true);
        this.setState({ essayDetail: item });
    }

    /** 顯示跳窗 */
    setModalVisible(visible) {
        console.log('顯示跳窗visible', visible);
        this.setState({ essayModalVisible: visible });
        if (!visible) {
            this.setState({ essayDetail: {} });
        }
    }

    render() {
        // console.log('EssayList', this.props);

        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    title="小事列表"
                    subTitle="表格化記錄小事"
                    backIcon={false}
                />
                <Table columns={this.state.columns} dataSource={this.state.essayList} />
                <EssayModal
                    // ref={this.wrapper}
                    essayModalVisible={this.state.essayModalVisible}
                    essayDetail={this.state.essayDetail}
                    setModalVisible={(event) => this.setModalVisible(event)}
                />
            </div>
        )
    }
}
