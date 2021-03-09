export class LayoutDeals {
  public static layouts = {

      key: 'deals',
      value: 'ข้อมูลข้อเสนอ',
      order: 3,
      table: {
          displayedColumns: ['dealsName', 'dealsContactName', 'dealsCustomerName', 'dealsType', 'menu'],
          columns: [
              { key: 'dealsName', value: 'ชื่อข้อเสนอ' },
              { key: 'dealsContactName', value: 'ชื่อผู้ติดต่อ' },
              { key: 'dealsCustomerName', value: 'บริษัท' },
              { key: 'dealsType', value: 'ลักษณะการสั่งซื้อ' },
          ]
      },
      forms: [
          { key: 'id', value: null },
          {
              controlType: 'textbox',
              key: 'dealsName',
              label: 'ความต้องการลูกค้า',
              type: 'text',
              value: '',
              required: true,
              order: 1,
              options: []
          },
          {
              controlType: 'lookup',
              key: 'dealsContactName',
              label: 'ชื่อผู้ติดต่อ',
              type: 'text',
              value: '',
              required: true,
              order: 1,
              lov: 'contacts'
          },
          {
              controlType: 'lookup',
              key: 'dealsCustomerName',
              label: 'บริษัท',
              type: 'text',
              value: '',
              required: true,
              order: 1,
              lov: 'customers'
          },
          {
              controlType: 'textarea',
              key: 'contactAddress',
              label: 'ที่อยู่ผู้ติดต่อ',
              type: 'text',
              value: '',
              required: true,
              order: 1,
              options: []
          },
          {
              controlType: 'textbox',
              key: 'contactPhoneNo',
              label: 'เบอร์โทรผู้ติดต่อ',
              type: 'text',
              value: '',
              required: true,
              order: 1,
              options: []
          },
          {
              controlType: 'textbox',
              key: 'contactLineId',
              label: 'Line IDผู้ติดต่อ',
              type: 'text',
              value: '',
              required: true,
              order: 1,
              options: []
          },

          {
              controlType: 'dropdown',
              key: 'dealsType',
              label: 'ลักษณะการสั่งซื้อ',
              value: '',
              required: true,
              order: 1,
              options: [
                  { key: 'ซื้อเฉพาะเนื้อสินค้า', value: 'ซื้อเฉพาะเนื้อสินค้า' },
                  { key: 'สร้างแบรนด์/สินค้าสำเร็จรูป', value: 'สร้างแบรนด์/สินค้าสำเร็จรูป' },
                  { key: 'ซื้อสินค้าสำเร็จรูป', value: 'ซื้อสินค้าสำเร็จรูป' },
                  { key: 'อื่นๆ', value: 'อื่นๆ' }
              ]
          },
          {
              controlType: 'textbox',
              key: 'dealUnitCost',
              label: 'ราคาทุนโดยประมาณที่ตั้งไว้(ถ้ามี)',
              type: 'text',
              value: '',
              required: false,
              order: 1,
              options: []
          },
          {
              controlType: 'textbox',
              key: 'dealsDetail',
              label: 'รายละเอียด',
              type: 'text',
              value: '',
              required: true,
              order: 1,
              options: []
          },
      ]
   }

}
