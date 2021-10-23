import React, { Component } from 'react';
import { Table, PageHeader, Button, Rate } from 'antd';
import EssayModal from '../../../components/EssayModal';
import { HeartFilled } from '@ant-design/icons';

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
                    <Rate disabled defaultValue={item} character={<HeartFilled/>} style={{color: '#ff6b6b'}}/>
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
        data: [
            {
                key: '01',
                title: '慶祝母親節',
                happiness: 3,
                date: '2021-05-09 00:00:00',
                img: 'essay-000101.jpg'
            },
            {
                key: '02',
                title: '學習攝影',
                happiness: 3,
                date: '2021-08-02 00:00:00',
                img: 'essay-000201.jpg'
            },
            {
                key: '03',
                title: '幫薇薇過27歲生日',
                happiness: 4,
                date: '2021-08-16 00:00:00',
                img: 'essay-000301.jpg'
            },
            {
                key: '04',
                title: '獲得免費的桃子',
                happiness: 5,
                date: '2021-09-03 00:00:00',
                img: 'essay-000401.jpg'
            },
            {
                key: '05',
                title: '去台中出差',
                happiness: 3,
                date: '2021-09-06 00:00:00',
                img: 'essay-000501.jpg'
            },
            {
                key: '06',
                title: '煮薑母茶暖暖身子',
                happiness: 5,
                date: '2021-09-08 00:00:00',
                img: 'essay-000601.jpg'
            },
            {
                key: '07',
                title: '慵懶的午後',
                happiness: 3,
                date: '2021-09-12 00:00:00',
                img: 'essay-000701.jpg'
            },
            {
                key: '08',
                title: '到海邊玩耍',
                happiness: 5,
                date: '2021-09-20 00:00:00',
                img: 'essay-000801.jpg'
            },
            {
                key: '09',
                title: '下午茶',
                happiness: 3,
                date: '2021-09-22 00:00:00',
                img: 'essay-000901.jpg'
            },
            {
                key: '10',
                title: '陽台視角',
                happiness: 3,
                date: '2021-09-28 00:00:00',
                img: 'essay-001001.jpg'
            },
            {
                key: '11',
                title: '新的開始',
                happiness: 5,
                date: '2021-10-05 00:00:00',
                img: 'essay-001101.jpg'
            },
            {
                key: '12',
                title: '準備冬季衣物',
                happiness: 3,
                date: '2021-10-14 00:00:00',
                img: 'essay-001201.jpg'
            },
            {
                key: '13',
                title: '壽司',
                happiness: 3,
                date: '2021-10-17 00:00:00',
                img: 'essay-001301.jpg'
            },
            {
                key: '14',
                title: '冬天要來了',
                happiness: 3,
                date: '2021-10-22 00:00:00',
                img: 'essay-001401.jpg'
            }
        ]
    }

    // wrapper = React.createRef();

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
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    title="小事列表"
                    subTitle="表格化記錄小事"
                    backIcon={false}
                />
                <Table columns={this.state.columns} dataSource={this.state.data} />
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
