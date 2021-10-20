import React, { Component } from 'react';
import { Table } from 'antd';
import { PageHeader } from 'antd';

export default class EssayList extends Component {

    state = {
        columns: [
            {
                title: '標題',
                dataIndex: 'title'
            },
            {
                title: '開心指數',
                dataIndex: 'happiness',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.happiness - b.happiness,
            },
            {
                title: '發生日期',
                dataIndex: 'date'
            },
        ],
        data: [
            {
                key: '1',
                title: '慶祝母親節',
                happiness: 3,
                date: '2021-05-09 00:00:00',
            },
            {
                key: '2',
                title: '學習攝影',
                happiness: 3,
                date: '2021-08-02 00:00:00',
            },
            {
                key: '3',
                title: '幫薇薇過27歲生日',
                happiness: 4,
                date: '2021-08-16 00:00:00',
            },
            {
                key: '4',
                title: '獲得免費的桃子',
                happiness: 5,
                date: '2021-09-03 00:00:00',
            },
            {
                key: '5',
                title: '去台中出差',
                happiness: 3,
                date: '2021-09-06 00:00:00',
            },
            {
                key: '6',
                title: '煮薑母茶暖暖身子',
                happiness: 5,
                date: '2021-09-08 00:00:00',
            },
            {
                key: '7',
                title: '慵懶的午後',
                happiness: 3,
                date: '2021-09-12 00:00:00',
            },
            {
                key: '8',
                title: '到海邊玩耍',
                happiness: 5,
                date: '2021-09-20 00:00:00',
            },
            {
                key: '9',
                title: '下午茶',
                happiness: 3,
                date: '2021-09-22 00:00:00',
            },
            {
                key: '10',
                title: '陽台視角',
                happiness: 3,
                date: '2021-09-28 00:00:00',
            },
            {
                key: '11',
                title: '新的開始',
                happiness: 5,
                date: '2021-10-05 00:00:00',
            },
            {
                key: '12',
                title: '準備冬季衣物',
                happiness: 3,
                date: '2021-10-14 00:00:00',
            },
            {
                key: '13',
                title: '壽司',
                happiness: 3,
                date: '2021-10-17 00:00:00',
            },
            {
                key: '14',
                title: '冬天要來了',
                happiness: 3,
                date: '2021-10-22 00:00:00',
            }
        ]
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
            </div>
        )
    }
}
