export class LayoutActivityEvent {
  public static layouts = {
    key: 'activitiesevent',
    value: 'Event',
    order: 2,
    table: {
      displayedColumns: ['activityName', 'activityDate', 'activityTimeStart', 'activityTimeEnd','relateToID','menu'],
      columns: [
        { key: 'activityName', value: 'ชื่องาน' },
        { key: 'activityDate', value: 'งานเริ่มวันที่' },
        { key: 'activityTimeStart', value: 'ตั่งแต่เวลา' },
        { key: 'activityTimeEnd', value: 'ถึงเวลา' },
        { key: 'isRepeat', value: 'Repeat' },
        { key: 'isReminde', value: 'Reminde' },
        { key: 'activityLocation', value: 'สถานที่' },
        { key: 'relateToID', value: 'ผู้ที่กี่ยวข้อง' },
      ]
    },
    forms: [
      { key: 'id', value: null },
      {
        controlType: 'textbox',
        key: 'activityName',
        label: 'ชื่ออีเวนท์',
        type: 'text',
        value: '',
        required: true,
        order: 1,
        lov: 'relateTo'
      },
      {
        controlType: 'datepicker',
        key: 'activityDate',
        label: 'วันที่',
        type: 'text',
        value: '',
        required: true,
        order: 1,
        options: []
      },
      {
        controlType: 'textbox',
        key: 'activityTimeStart',
        label: 'ตั่งแต่',
        type: 'text',
        value: '',
        required: true,
        order: 1,
        options: []
      },
      {
        controlType: 'textbox',
        key: 'activityTimeEnd',
        label: 'ถึง',
        type: 'text',
        value: '',
        required: true,
        order: 1,
        options: []
      },
      {
        controlType: 'checkbox',
        key: 'isRepeat',
        label: 'เตือนซ้ำ',
        type: 'text',
        value: '',
        required: true,
        order: 1,
        options: []
      },
      {
        controlType: 'checkbox',
        key: 'isReminde',
        label: 'แจ้งเตือน',
        value: true,
        required: true,
        order: 1,
        options: []
      },
      {
        controlType: 'textarea',
        key: 'activityLocation',
        label: 'พิกัดสถานที่',
        type: 'text',
        value: '',
        required: true,
        order: 1,
        options: []
      },
      {
        controlType: 'lookup',
        key: 'relateToID',
        label: 'ผู้ที่กี่ยวข้อง',
        type: 'text',
        value: '',
        required: true,
        order: 1,
        lov: 'relateTo'
      },
    ]
  }
}
