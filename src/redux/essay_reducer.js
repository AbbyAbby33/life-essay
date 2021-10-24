/** 
 * 小事資料
 * @preState 之前的狀態
 * @action 要求的操作
 *  */

export default function essayReducer(preState, action) {
    const { type, data } = action;

    const essayList = [
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

    switch (type) {
        case 'get':
            console.log('get')
            return essayList;
            // break;
        default:
            return essayList;
            // break;
    }

}