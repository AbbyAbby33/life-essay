import React, { Component } from 'react';
import { PageHeader } from 'antd';

export default class RandomEssay extends Component {
    render() {
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    title="隨機小事"
                    subTitle="元件化練習"
                    backIcon={false}
                />
            </div>
        )
    }
}
