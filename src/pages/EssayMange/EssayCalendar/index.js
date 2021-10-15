import React, { Component } from 'react';
import { PageHeader } from 'antd';

export default class EssayCalendar extends Component {
    render() {
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    title="小事日曆"
                    subTitle="使用日曆視覺化顯示小事"
                    backIcon={false}
                />
            </div>
        )
    }
}
