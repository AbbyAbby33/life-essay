import React, { Component } from 'react';
import { PageHeader, Row, Col, Card } from 'antd';

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
                <Row gutter={24}>
                    <Col xs={24}>
                        <Card title="開發者資訊">
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
