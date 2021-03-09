export class LayoutContactNoteFackDb {
  public static Layouts = {
    key: 'contactnotes',
    value: 'บันทึกโน๊ต',
    order: 3,
    table: {
      displayedColumns: ['notesName', 'menu'],
      columns: [
        { key: 'notesName', value: 'ชื่อบันทึก' },
      ]
    },
    forms: []
  }
}
