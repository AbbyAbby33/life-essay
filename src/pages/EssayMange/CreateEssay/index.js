import React, { Component } from 'react';
import { PageHeader } from 'antd';

export default class CreateEssay extends Component {
    render() {
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    title="新增小事"
                    subTitle="表單"
                    backIcon={false}
                />
            </div>
        )
    }
}
