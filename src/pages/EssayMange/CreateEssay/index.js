import React, { Component } from 'react';
import { PageHeader, Row, Col, Card, Form, Input, Button, DatePicker, Rate, Upload } from 'antd';
import { UploadOutlined, HeartFilled } from '@ant-design/icons';

export default class CreateEssay extends Component {

    normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    onFinish = (values) => {
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    title="新增小事"
                    subTitle="表單"
                    backIcon={false}
                />
                <Row gutter={24}>
                    <Col xs={24}>
                        <Card title="新增小事資料">
                            <Form
                                name="basic"
                                labelAlign="left"
                                labelCol={{ span: 4 }}
                                wrapperCol={{ span: 20 }}
                                initialValues={{ remember: true }}
                                onFinish={this.onFinish}
                                onFinishFailed={this.onFinishFailed}
                                autoComplete="off"
                            >
                                <Row gutter={[64, 24]}>
                                    <Col xs={24} lg={12}>

                                        <Form.Item
                                            label="標題"
                                            name="title"
                                            rules={[{ required: true, message: '請輸入標題！' }]}
                                        >
                                            <Input placeholder="請輸入標題" />
                                        </Form.Item>

                                        <Form.Item
                                            label="日期"
                                            name="date"
                                            rules={[{ required: true, message: '請選擇日期！' }]}
                                        >
                                            <DatePicker />
                                        </Form.Item>

                                        <Form.Item
                                            label="開心程度"
                                            name="happiness"
                                            rules={[{ required: true, message: '請選擇開心程度！' }]}
                                        >
                                            <Rate character={<HeartFilled />} style={{ color: '#ff6b6b' }} />
                                        </Form.Item>



                                        <Form.Item
                                            name="pic"
                                            label="小事照片"
                                            valuePropName="fileList"
                                            getValueFromEvent={this.normFile}
                                            rules={[{ required: true, message: '請上傳照片！' }]}
                                        >
                                            <Upload
                                                name="logo"
                                                listType="picture"
                                                maxCount={1}
                                                beforeUpload={() => false}
                                            >
                                                <Button icon={<UploadOutlined />}>上傳</Button>
                                            </Upload>
                                        </Form.Item>

                                    </Col>
                                    <Col xs={24} lg={12}>
                                        <Form.Item
                                            label="內文"
                                            name="text"
                                            rules={[{ required: true, message: '請輸入內文！' }]}
                                        >
                                            <Input.TextArea placeholder="請輸入內文" rows={8} />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <div className="le-form-operate-footer-button-wrap">
                                    <Button type="primary" htmlType="submit">
                                        新增
                                    </Button>                                    
                                </div>

                            </Form>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
