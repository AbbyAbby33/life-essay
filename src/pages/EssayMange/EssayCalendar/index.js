import React, { Component } from 'react';
import { PageHeader } from 'antd';
import { Calendar, Badge } from 'antd';
import moment from 'moment'

export default class EssayCalendar extends Component {

    getListData(value) {
        console.log('value', value);
        console.log('moment', moment('2021-09-21 12:00:00'));

        let listData;
        switch (value.date()) {
            case 8:
                listData = [
                    { type: 'warning', content: 'This is warning event.' },
                    { type: 'success', content: 'This is usual event.' },
                ];
                break;
            case 10:
                listData = [
                    { type: 'warning', content: 'This is warning event.' },
                    { type: 'success', content: 'This is usual event.' },
                    { type: 'error', content: 'This is error event.' },
                ];
                break;
            case 15:
                listData = [
                    { type: 'warning', content: 'This is warning event' },
                    { type: 'success', content: 'This is very long usual event。。....' },
                    { type: 'error', content: 'This is error event 1.' },
                    { type: 'error', content: 'This is error event 2.' },
                    { type: 'error', content: 'This is error event 3.' },
                    { type: 'error', content: 'This is error event 4.' },
                ];
                break;
            default:
        }
        return listData || [];
    }

    dateCellRender = (value) => {
        const listData = this.getListData(value);
        // console.log('listData', listData);
        return (
            <ul className="events">
                {listData.map(item => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
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
                <Calendar dateCellRender={this.dateCellRender} />
            </div>
        )
    }
}
