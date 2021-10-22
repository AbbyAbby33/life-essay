import React, { Component } from 'react';
import { PageHeader, Card, Col, Row } from 'antd';
import './index.less'

export default class RandomEssay extends Component {

    state = {
        data: [
            {
                key: '01',
                title: '慶祝母親節',
                happiness: 3,
                date: '2021-05-09 00:00:00',
                img: 'essay-000101.jpg'
            },
            {
                key: '02',
                title: '學習攝影',
                happiness: 3,
                date: '2021-08-02 00:00:00',
                img: 'essay-000201.jpg'
            },
            {
                key: '03',
                title: '幫薇薇過27歲生日',
                happiness: 4,
                date: '2021-08-16 00:00:00',
                img: 'essay-000301.jpg'
            },
            {
                key: '04',
                title: '獲得免費的桃子',
                happiness: 5,
                date: '2021-09-03 00:00:00',
                img: 'essay-000401.jpg'
            },
            {
                key: '05',
                title: '去台中出差',
                happiness: 3,
                date: '2021-09-06 00:00:00',
                img: 'essay-000501.jpg'
            },
            {
                key: '06',
                title: '煮薑母茶暖暖身子',
                happiness: 5,
                date: '2021-09-08 00:00:00',
                img: 'essay-000601.jpg'
            },
            {
                key: '07',
                title: '慵懶的午後',
                happiness: 3,
                date: '2021-09-12 00:00:00',
                img: 'essay-000701.jpg'
            },
            {
                key: '08',
                title: '到海邊玩耍',
                happiness: 5,
                date: '2021-09-20 00:00:00',
                img: 'essay-000801.jpg'
            },
            {
                key: '09',
                title: '下午茶',
                happiness: 3,
                date: '2021-09-22 00:00:00',
                img: 'essay-000901.jpg'
            },
            {
                key: '10',
                title: '陽台視角',
                happiness: 3,
                date: '2021-09-28 00:00:00',
                img: 'essay-001001.jpg'
            },
            {
                key: '11',
                title: '新的開始',
                happiness: 5,
                date: '2021-10-05 00:00:00',
                img: 'essay-001101.jpg'
            },
            {
                key: '12',
                title: '準備冬季衣物',
                happiness: 3,
                date: '2021-10-14 00:00:00',
                img: 'essay-001201.jpg'
            },
            {
                key: '13',
                title: '壽司',
                happiness: 3,
                date: '2021-10-17 00:00:00',
                img: 'essay-001301.jpg'
            },
            {
                key: '14',
                title: '冬天要來了',
                happiness: 3,
                date: '2021-10-22 00:00:00',
                img: 'essay-001401.jpg'
            }
        ]
    }

    render() {
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    title="小事卡片"
                    subTitle="單元化排版"
                    backIcon={false}
                />
                <div className="site-card-wrapper">
                    <Row gutter={24} className="essay-card-row">
                        {this.state.data.map(item => {
                            return (
                                <Col xs={24} lg={12} xl={8} className="essay-card" key={item.key}>
                                    <Card title={item.title} bordered={false}>
                                        <div className="essay-img-wrapper">
                                            <img src={`${process.env.PUBLIC_URL}/assets/img/${item.img}`} alt="essay-img"></img>
                                        </div>
                                        <p>時間：{item.date}</p>
                                        <p>
                                            內文：詳細文章內容詳細文章內容詳細文章內容詳細文章內容詳細文章內容，
                                            詳細文章內容詳細文章內容詳細文章內容，詳細文章內容詳細文章內容詳細文章內容，
                                            詳細文章內容詳細文章內容詳細文章內容，詳細文章內容詳細文章內容詳細文章內容，
                                            詳細文章內容詳細文章內容詳細文章內容，詳細文章內容詳細文章內容詳細文章內容
                                        </p>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </div>
        )
    }
}
