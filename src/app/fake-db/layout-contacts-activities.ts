export class LayoutContactActivitiesFackDb {
  public static layouts = {
    key: 'contactactivities',
    value: 'กิจกรรม',
    order: 3,
    table: {
      displayedColumns: ['activitiesName', 'menu'],
      columns: [
        { key: 'activitiesName', value: 'ชื่อกิจกรรม' },
      ]
    },
    forms: []
  }
}
