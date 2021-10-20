import React, { Component } from 'react';
import { PageHeader } from 'antd';

export default class TechnicalResources extends Component {
    render() {
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    title="技術資源"
                    subTitle="說明專案使用到的技術"
                    backIcon={false}
                />
            </div>
        )
    }
}
