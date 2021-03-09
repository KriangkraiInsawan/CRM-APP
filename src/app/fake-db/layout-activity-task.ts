export class LayoutActivityTask {
  public static layouts = {
    key: 'activitiestask',
    value: 'Task',
    order: 1,
    table: {
      displayedColumns: ['activityName', 'activityDate', 'isCompleted', 'isHighPriority', 'menu'],
      columns: [
        { key: 'activityName', value: 'ชื่องาน' },
        { key: 'activityDate', value: 'วันที่' },
        { key: 'isCompleted', value: 'เมื่อเสร็จสิ้น' },
        { key: 'isHighPriority', value: 'สำคัญมาก' },
        { key: 'relateToID', value: 'ผู้ที่กี่ยวข้อง' },
      ]
    },
    forms: [
      { key: 'id', value: null },
      {
        controlType: 'textbox',
        key: 'activityName',
        label: 'ชื่องาน',
        type: 'text',
        value: '',
        required: true,
        order: 1
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
        controlType: 'checkbox',
        key: 'isRepeat',
        label: 'เตือนซ้ำ',
        type: 'text',
        value: false,
        required: true,
        order: 1,
        options: []
      },
      {
        controlType: 'checkbox',
        key: 'isReminde',
        label: 'แจ้งเตือน',
        type: 'text',
        value: false,
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
      {
        controlType: 'textbox',
        key: 'activityDescription',
        label: 'คำอธิบาย',
        type: 'text',
        value: '',
        required: true,
        order: 1,
        options: []
      },
      {
        controlType: 'checkbox',
        key: 'isHighPriority',
        label: 'เมื่อความสำคัญสูง',
        type: 'text',
        value: '',
        required: true,
        order: 1,
        options: []
      },
      {
        controlType: 'checkbox',
        key: 'isCompleted',
        label: 'เมื่อเสร็จสิ้น',
        type: 'text',
        value: '',
        required: true,
        order: 1,
        options: []
      },
    ]
  }
}
