import React, { Component } from 'react';
import { PageHeader, Col, Row, Card } from 'antd';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveBar } from '@nivo/bar'
import './index.less';

export default class StatisticsAnalysis extends Component {

    state = {
        pieData: [
            {
                'id': '5顆心',
                'label': '5顆心',
                'value': 13
            },
            {
                'id': '4顆心',
                'label': '4顆心',
                'value': 26
            },
            {
                'id': '3顆心',
                'label': '3顆心',
                'value': 65
            }
        ],
        barData: [
            {
                'country': '五月',
                '5顆心': 2,
                '4顆心': 3,
                '3顆心': 6
            },
            {
                'country': '六月',
                '5顆心': 0,
                '4顆心': 5,
                '3顆心': 10
            },
            {
                'country': '七月',
                '5顆心': 4,
                '4顆心': 6,
                '3顆心': 12
            },
            {
                'country': '八月',
                '5顆心': 3,
                '4顆心': 2,
                '3顆心': 7
            },
            {
                'country': '九月',
                '5顆心': 1,
                '4顆心': 2,
                '3顆心': 10
            },
            {
                'country': '十月',
                '5顆心': 3,
                '4顆心': 8,
                '3顆心': 20
            }
        ]
    }

    render() {
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    title="小事統計"
                    subTitle="視覺化第三方庫"
                    backIcon={false}
                />
                {/* 日曆化元件
                <Row gutter={24}>
                    <Col xs={24} className="le-calendar-chart">
                        Col
                    </Col>
                </Row> */}
                <Row gutter={24}>
                    {/* <Col xs={24} lg={8} className="le-pie-chart"> */}
                    <Col xs={24} lg={8}>
                        <Card title="半年內開心程度事件統計" bordered={false} className="le-pie-chart">
                            <ResponsivePie
                                data={this.state.pieData}
                                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                                // colors={{ datum: 'data.color' }}
                                colors={['#306969', '#edcd64', '#cb6767']}
                                borderWidth={1}
                                borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                                arcLinkLabelsTextColor="#333333"
                                arcLinkLabelsThickness={1}
                                arcLinkLabelsColor={{ from: 'color' }}
                                arcLabelsSkipAngle={10}
                                arcLinkLabelsDiagonalLength={0}
                                theme={{
                                    fontSize: 18,
                                    fontFamily: 'Segoe UI',
                                    textColor: '#fff',
                                }}
                                legends={[
                                    {
                                        anchor: 'bottom',
                                        direction: 'row',
                                        justify: false,
                                        translateX: 0,
                                        translateY: 56,
                                        itemsSpacing: 0,
                                        itemWidth: 100,
                                        itemHeight: 18,
                                        itemTextColor: '#999',
                                        itemDirection: 'left-to-right',
                                        itemOpacity: 1,
                                        symbolSize: 18,
                                        symbolShape: 'circle',
                                        effects: [
                                            {
                                                on: 'hover',
                                                style: {
                                                    itemTextColor: '#000'
                                                }
                                            }
                                        ]
                                    }
                                ]}
                            />
                        </Card>
                    </Col>
                    {/* <Col xs={24} lg={16} className="le-bar-chart"> */}
                    <Col xs={24} lg={16}>
                        <Card title="半年內各月份事件統計" bordered={false} className="le-bar-chart">
                            <ResponsiveBar
                                data={this.state.barData}
                                keys={['5顆心', '4顆心', '3顆心']}
                                indexBy="country"
                                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                                theme={{
                                    fontSize: 18,
                                    fontFamily: 'Segoe UI',
                                    // textColor: '#fff',
                                }}
                                padding={0.3}
                                valueScale={{ type: 'linear' }}
                                indexScale={{ type: 'band', round: true }}
                                // colors={{ scheme: 'nivo' }}
                                colors={['#306969', '#edcd64', '#cb6767']}
                                // defs={[
                                //     {
                                //         id: 'dots',
                                //         type: 'patternDots',
                                //         background: 'inherit',
                                //         color: '#38bcb2',
                                //         size: 4,
                                //         padding: 1,
                                //         stagger: true
                                //     },
                                //     {
                                //         id: 'lines',
                                //         type: 'patternLines',
                                //         background: 'inherit',
                                //         color: '#eed312',
                                //         rotation: -45,
                                //         lineWidth: 6,
                                //         spacing: 10
                                //     }
                                // ]}
                                // fill={[
                                //     {
                                //         match: {
                                //             id: '3顆心'
                                //         },
                                //         id: 'dots'
                                //     },
                                //     {
                                //         match: {
                                //             id: '5顆心'
                                //         },
                                //         id: 'lines'
                                //     }
                                // ]}
                                borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                                axisTop={null}
                                axisRight={null}
                                axisBottom={{
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: '',
                                    legendPosition: 'middle',
                                    legendOffset: 32
                                }}
                                axisLeft={{
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: '',
                                    legendPosition: 'middle',
                                    legendOffset: -40
                                }}
                                labelSkipWidth={12}
                                labelSkipHeight={12}
                                // labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                                labelTextColor="white"
                                legends={[
                                    {
                                        dataFrom: 'keys',
                                        anchor: 'bottom-right',
                                        direction: 'column',
                                        justify: false,
                                        translateX: 120,
                                        translateY: 0,
                                        itemTextColor: '#999',
                                        itemsSpacing: 2,
                                        itemWidth: 100,
                                        itemHeight: 20,
                                        itemDirection: 'left-to-right',
                                        itemOpacity: 0.85,
                                        symbolSize: 20,
                                        effects: [
                                            {
                                                on: 'hover',
                                                style: {
                                                    // itemOpacity: 1,
                                                    itemTextColor: '#000'
                                                }
                                            }
                                        ]
                                    }
                                ]}
                                role="application"
                                ariaLabel="Nivo bar chart demo"
                                barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in country: " + e.indexValue }}
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
