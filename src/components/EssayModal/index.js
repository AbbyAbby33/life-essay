import React, { Component } from 'react';
import './index.less';
import { Modal, Button, Rate } from 'antd';
import { HeartFilled } from '@ant-design/icons';

export default class EssayModal extends Component {
    render() {
        return (
            <div>
                <Modal
                    title={`小事詳細記事：${this.props.essayDetail.title}`}
                    centered
                    width={900}
                    visible={this.props.essayModalVisible}
                    onOk={() => this.props.setModalVisible(false)}
                    onCancel={() => this.props.setModalVisible(false)}
                    footer={[
                        <Button key="submit" type="primary" onClick={() => this.props.setModalVisible(false)}>
                            關閉
                        </Button>
                    ]}
                >
                    <div className="essay-modal-body">
                        <img src={`${process.env.PUBLIC_URL}/assets/img/${this.props.essayDetail.img}`} alt="essay-img"></img>
                        <div>
                            <p>時間：{this.props.essayDetail.date}</p>
                            {/* 開心指數：{this.props.essayDetail.happiness} */}
                            <Rate disabled defaultValue={this.props.essayDetail.happiness} character={<HeartFilled/>} style={{color: '#ff6b6b'}}/>
                            <p>
                                內文：詳細文章內容詳細文章內容詳細文章內容詳細文章內容詳細文章內容，
                                詳細文章內容詳細文章內容詳細文章內容，詳細文章內容詳細文章內容詳細文章內容，
                                詳細文章內容詳細文章內容詳細文章內容，詳細文章內容詳細文章內容詳細文章內容，
                                詳細文章內容詳細文章內容詳細文章內容，詳細文章內容詳細文章內容詳細文章內容
                            </p>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}
