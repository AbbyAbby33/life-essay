import React, { Component } from 'react';
import { PageHeader, Calendar, Modal, Button } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-tw';
import './index.less'
import { SmileTwoTone, StarTwoTone } from '@ant-design/icons';
import EssayModal from '../../../components/EssayModal';

export default class EssayCalendar extends Component {
    state = {
        essayModalVisible: false,
        essayDetail: {},
        data: [
            {
                key: '1',
                title: '慶祝母親節',
                happiness: 3,
                date: '2021-05-09 00:00:00',
                img: 'essay-000101.jpg'
            },
            {
                key: '2',
                title: '學習攝影',
                happiness: 3,
                date: '2021-08-02 00:00:00',
                img: 'essay-000201.jpg'
            },
            {
                key: '3',
                title: '幫薇薇過27歲生日',
                happiness: 4,
                date: '2021-08-16 00:00:00',
                img: 'essay-000301.jpg'
            },
            {
                key: '4',
                title: '獲得免費的桃子',
                happiness: 5,
                date: '2021-09-03 00:00:00',
                img: 'essay-000401.jpg'
            },
            {
                key: '5',
                title: '去台中出差',
                happiness: 3,
                date: '2021-09-06 00:00:00',
                img: 'essay-000501.jpg'
            },
            {
                key: '6',
                title: '煮薑母茶暖暖身子',
                happiness: 5,
                date: '2021-09-08 00:00:00',
                img: 'essay-000601.jpg'
            },
            {
                key: '7',
                title: '慵懶的午後',
                happiness: 3,
                date: '2021-09-12 00:00:00',
                img: 'essay-000701.jpg'
            },
            {
                key: '8',
                title: '到海邊玩耍',
                happiness: 5,
                date: '2021-09-20 00:00:00',
                img: 'essay-000801.jpg'
            },
            {
                key: '9',
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

    /** 取得每一格日期的資料 */
    getListData(value) {
        const cellTime = moment(value).startOf('date').valueOf();
        const cellEssayList = this.state.data.filter(v => {
            const essayTime = moment(v.date).valueOf();
            return cellTime === essayTime;
        });
        // console.log('cellEssayList', cellEssayList);
        return cellEssayList || [];
    }

    /** 小事被點擊 */
    essayClick(event, item) {
        // console.log('event', event, 'item', item);
        this.setModalVisible(true);
        this.setState({ essayDetail: item });
    }

    /** 顯示跳窗 */
    setModalVisible(visible) {
        console.log('顯示跳窗visible', visible);
        this.setState({ essayModalVisible: visible });
        if (!visible) {
            this.setState({ essayDetail: {} });
        }
    }

    /** 取得每一格日期要展示的view */
    dateCellRender = (value) => {
        const listData = this.getListData(value);
        // console.log('listData', listData);
        return (
            <ul className="date-cell-events">
                {listData.map(item => (
                    <li key={item.title} onClick={($event) => this.essayClick($event, item)}>
                        {/* <Badge status={item.type} text={item.title} /> */}
                        <SmileTwoTone twoToneColor="#ff6b6b" />&nbsp;
                        {item.happiness === 5 ? <StarTwoTone twoToneColor="#feca57" /> : null}
                        {item.title}
                    </li>
                ))}
            </ul>
        );
    }

    /** 取得每個月資料件數 */
    getMonthData(value) {
        const cellMonth = moment(value).get('month');
        const cellEssayList = this.state.data.filter(v => {
            const essayMonth = moment(v.date).get('month');
            return cellMonth === essayMonth;
        });
        // console.log('cellEssayList', cellEssayList);
        return cellEssayList.length;
    }

    /** 取得每一格月份要展示的view */
    monthCellRender = (value) => {
        // console.log('value', value);
        const num = this.getMonthData(value);
        return num ? (
            <div className="notes-month">
                <span>{num} 件小事</span>
            </div>
        ) : null;
    }

    render() {
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    title="小事日曆"
                    subTitle="使用日曆視覺化顯示小事"
                    backIcon={false}
                />
                <Calendar dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender} />
                {/* <Modal
                    title={`小事詳細記事：${this.state.essayDetail.title}`}
                    centered
                    width={900}
                    visible={this.state.essayModalVisible}
                    onOk={() => this.setModalVisible(false)}
                    onCancel={() => this.setModalVisible(false)}
                    footer={[
                        <Button key="submit" type="primary" onClick={() => this.setModalVisible(false)}>
                            關閉
                        </Button>
                    ]}
                >
                    <div className="essay-modal-body">
                        <img src={`${process.env.PUBLIC_URL}/assets/img/${this.state.essayDetail.img}`} alt="essay-img"></img>
                        <div>
                            <p>時間：{this.state.essayDetail.date}</p>
                            <p>開心度：{this.state.essayDetail.happiness}</p>
                            <p>內文：詳細文章內容詳細文章內容詳細文章內容詳細文章內容詳細文章內容，詳細文章內容詳細文章內容詳細文章內容，詳細文章內容詳細文章內容詳細文章內容，詳細文章內容詳細文章內容詳細文章內容，詳細文章內容詳細文章內容詳細文章內容，詳細文章內容詳細文章內容詳細文章內容，詳細文章內容詳細文章內容詳細文章內容</p>
                        </div>
                    </div>
                </Modal> */}
                <EssayModal
                    essayModalVisible={this.state.essayModalVisible}
                    essayDetail={this.state.essayDetail}
                    setModalVisible={(event) => this.setModalVisible(event)}
                />
            </div >
        )
    }
}
