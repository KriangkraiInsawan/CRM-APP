export class LayoutCustomer {
  public static layouts = {
    key: 'customer',
    value: 'ข้อมูลลูกค้า',
    order: 3,
    table: {
      displayedColumns: ['customerName', 'customerPhoneNo', 'customerWebSite', 'customerOwner', 'menu'],
      columns: [
        { key: 'customerName', value: 'ชื่อบริษัท' },
        { key: 'customerPhoneNo', value: 'เบอร์ติดต่อ' },
        { key: 'customerWebSite', value: 'เว็บไซต์' },
        { key: 'customerOwner', value: 'ผู้รับผิดชอบ' },
      ]
    },
    forms: [
      { key: 'id', value: null },
      {
        controlType: 'textbox',
        key: 'customerName',
        label: 'ชื่อบริษัท',
        type: 'text',
        value: '',
        required: true,
        order: 1,
        options: []
      },
      {
        controlType: 'textbox',
        key: 'customerPhoneNo',
        label: 'เบอร์ติดต่อ',
        type: 'text',
        value: '',
        required: true,
        order: 1,
        options: []
      },
      {
        controlType: 'textbox',
        key: 'customerWebSite',
        label: 'เว็บไซต์',
        type: 'text',
        value: '',
        required: true,
        order: 1,
        options: []
      },
      {
        controlType: 'textarea',
        key: 'customerAddress',
        label: 'ที่อยู่',
        type: 'text',
        value: '',
        required: true,
        order: 1,
        options: []
      },
      {
        controlType: 'lookup',
        key: 'customerOwner',
        label: 'ผู้รับผิดชอบ',
        type: 'text',
        value: '',
        required: true,
        order: 1,
        lov: 'users-sale'
      },

    ]


  }
}
