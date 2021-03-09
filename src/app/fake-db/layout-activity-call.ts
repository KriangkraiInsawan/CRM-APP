export class LayoutActivityCall{
  public static layouts = {
    key: 'activitiescall',
    value: 'Call',
    order: 3,
    table:{
      displayedColumns:['relateToID','activityDate','activityTimeStart','activityTimeEnd','menu'],
      columns: [
        { key: 'relateToID', value: 'โทรหา/รับสาย' },
        { key: 'activityDate', value: 'วันที่' },
        { key: 'activityTimeStart', value: 'เวลา' },
        { key: 'activityTimeEnd', value: 'ถึง' },
      ]
    },
    forms: [
      { key: 'id', value: null },
      {
        controlType: 'lookup',
        key: 'relateToID',
        label: 'โทรหา/รับสาย จาก',
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
        label: 'ตั่งแต่เวลา',
        type: 'text',
        value: '',
        required: true,
        order: 1,
        options: []
      },
      {
        controlType: 'textbox',
        key: 'activityTimeEnd',
        label: 'ถึงเวลา',
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
        type: 'text',
        value: '',
        required: true,
        order: 1,
        options: []
      },
      {
        controlType: 'dropdown',
        key: 'activityCallType',
        label: 'ประเภทการโทร',
        type: 'text',
        value: '',
        required: true,
        order: 1,
        options: [
          { key: 'outbound', value: 'โทรหา' },
          { key: 'inbound', value: 'รับสาย' },
        ]
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
      {
        controlType: 'textarea',
        key: 'activityDescription',
        label: 'หัวข้อการสนทนา',
        type: 'text',
        value: '',
        required: true,
        order: 1,
        options: []
      },
    ]
  }
}
