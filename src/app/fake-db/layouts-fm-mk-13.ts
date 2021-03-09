export class LayoutsFmMk13 {
  public static layouts = {
    key: 'fm-mk-13',
    value: 'ใบส่งตัวอย่าง',
    order: 3,
    table: {
      displayedColumns: ['dealsName', 'docNo', 'docDate', 'status', 'menu'],
      columns: [
        { key: 'dealsName', value: 'ชื่อดีล' },
        { key: 'docNo', value: 'เลขที่เอกสาร' },
        { key: 'docDate', value: 'วันที่เอกสาร' },
        { key: 'status', value: 'สถานะ' },
      ]
    },
    forms: [
      { key: 'id', value: null },
      {
        controlType: 'textbox',
        key: 'dealsName',
        label: 'ชื่อดีล',
        type: 'text',
        value: '',
        required: true,
        order: 1,
        options: []
      },
      {
        controlType: 'textbox',
        key: 'docNo',
        label: 'เลขที่เอกสาร',
        type: 'text',
        value: '',
        required: true,
        order: 1,
        options: []
      },
      {
        controlType: 'textbox',
        key: 'docDate',
        label: 'วันที่เอกสาร',
        type: 'text',
        value: '',
        required: true,
        order: 1,
        options: []
      },
      {
        controlType: 'textbox',
        key: 'status',
        label: 'สถานะ',
        type: 'text',
        value: '',
        required: true,
        order: 1,
        options: []
      }
    ]
  }
}
