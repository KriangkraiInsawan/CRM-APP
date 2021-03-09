export class LayoutContactFackDb {
  public static Layouts = {
    key: 'contact',
    value: 'ข้อมูลผู้ติดต่อ',
    order: 3,
    table: {
      displayedColumns: ['contactName', 'contactCompany', 'contactPhoneNo', 'contactEmail', 'contactLineId', 'menu'],
      columns: [
        { key: 'contactName', value: 'ชื่อผู้ติดต่อ' },
        { key: 'contactCompany', value: 'บริษัท' },
        { key: 'contactPhoneNo', value: 'เบอร์ติดต่อ' },
        { key: 'contactEmail', value: 'อีเมล' },
        { key: 'contactLineId', value: 'ไลน์' },
        { key: 'contactAddress', value: 'ที่อยู่' },
      ]
    },
    forms: [
      { key: 'id', value: null },
      {
        controlType: 'textbox',
        key: 'contactName',
        label: 'ชื่อผู้ติดต่อ',
        type: 'text',
        value: '',
        required: true,
        order: 1,
        options: []
      },
      {
        controlType: 'lookup',
        key: 'contactCompany',
        label: 'ชื่อบริษัทลูกค้า',
        type: 'text',
        value: '',
        required: true,
        order: 1,
        lov: 'customers'
      },
      {
        controlType: 'textbox',
        key: 'contactPhoneNo',
        label: 'เบอร์ติดต่อ',
        type: 'number',
        value: '',
        required: true,
        order: 1,
        options: [],
        maxlangh:''
      },
      {
        controlType: 'textbox',
        key: 'contactEmail',
        label: 'อีเมล',
        type: 'text',
        value: '',
        required: true,
        order: 1,
        options: []
      },
      {
        controlType: 'textbox',
        key: 'contactLineId',
        label: 'ไลน์',
        type: 'text',
        value: '',
        required: true,
        order: 1,
        options: []
      },
      {
        controlType: 'textarea',
        key: 'contactAddress',
        label: 'ที่อยู่',
        type: 'text',
        value: '',
        required: true,
        order: 1,
        options: []
      },
    ],
  }

}
