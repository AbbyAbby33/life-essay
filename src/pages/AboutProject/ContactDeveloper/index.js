import React, { Component } from 'react';
import { PageHeader } from 'antd';

export default class ContactDeveloper extends Component {
    render() {
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    title="聯絡開發者"
                    subTitle="聯絡資訊"
                    backIcon={false}
                />
            </div>
        )
    }
}
