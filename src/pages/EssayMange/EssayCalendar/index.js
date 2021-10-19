import React, { Component } from 'react';
import { PageHeader } from 'antd';
import { Calendar } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-tw';
import './index.less'

export default class EssayCalendar extends Component {
    state = {
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
                happiness: 3,
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
                happiness: 3,
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
                happiness: 3,
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

    /** 取得每一格日期的資料 */
    getListData(value) {
        const cellTime = moment(value).startOf('date').valueOf();
        const cellEssayList = this.state.data.filter(v => {
            const essayTime = moment(v.date).valueOf();
            return cellTime === essayTime;
        });
        // console.log('cellEssayList', cellEssayList);
        return cellEssayList || [];
    }

    /** 取得每一格日期要展示的view */
    dateCellRender = (value) => {
        const listData = this.getListData(value);
        // console.log('listData', listData);
        return (
            <ul className="events">
                {listData.map(item => (
                    <li key={item.title}>
                        {/* <Badge status={item.type} text={item.title} /> */}
                        {item.title}
                    </li>
                ))}
            </ul>
        );
    }

    getMonthData(value) {
        const cellMonth = moment(value).get('month');
        const cellEssayList = this.state.data.filter(v => {
            const essayMonth = moment(v.date).get('month');
            return cellMonth === essayMonth;
        });
        console.log('cellEssayList', cellEssayList);
        return cellEssayList.length;
    }

    monthCellRender = (value) => {
        console.log('value', value);
        const num = this.getMonthData(value);
        console.log('num', num);
        return num ? (
            <div className="notes-month">
                <span>{num} 件小事</span>
            </div>
        ) : null;
    }

    render() {
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    title="小事日曆"
                    subTitle="使用日曆視覺化顯示小事"
                    backIcon={false}
                />
                <Calendar dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender} />
            </div>
        )
    }
}
