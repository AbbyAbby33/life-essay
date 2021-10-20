import React, { Component } from 'react';
import { PageHeader } from 'antd';

export default class StatisticsAnalysis extends Component {
    render() {
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    title="小事統計"
                    subTitle="視覺化第三方庫"
                    backIcon={false}
                />
            </div>
        )
    }
}
