import { LayoutCustomer } from './layout-customer';
import { LayoutsFmMk06 } from './layouts-fm-mk-06';
import { LayoutsFmMk13 } from './layouts-fm-mk-13';
import { LayoutsFmMk11 } from './layouts-fm-mk-11';
import { LayoutsPO } from './layouts-po';
import { LayoutContactFackDb } from './layout-contacts';
import { LayoutContactNoteFackDb } from './layout-contacts-note';
import { LayoutContactActivitiesFackDb } from './layout-contacts-activities';
import { LayoutContactDeals } from './layout-contacts-deals'
import { LayoutNote } from './layout-note';
import { LayoutLogin } from './layout-login';
import { LayoutDeals } from './layout-deals';
import { LayoutActivityTask } from './layout-activity-task';
import { LayoutActivityEvent } from './layout-activity-event';
import { LayoutActivityCall } from './layout-activity-call';


export class LayoutsFakeDb {
  public static layouts = [
    LayoutLogin.layout,
    {
      key: 'companies',
      value: 'ข้อมูลบริษัท',
      order: 1,
      table: {
        displayedColumns: ['companyCode', 'companyName', 'isActive', 'menu'],
        columns: [
          { key: 'companyCode', value: 'รหัสบริษัท' },
          { key: 'companyName', value: 'ชื่อบริษัท' },
          { key: 'isActive', value: 'สถานะใช้งาน' },
        ]
      },
      forms: [
        { key: 'id', value: null },
        {
          controlType: 'textbox',
          key: 'companyCode',
          label: 'รหัสบริษัท',
          type: 'text',
          value: '',
          required: true,
          order: 1,
          options: []
        },
        {
          controlType: 'textbox',
          key: 'companyName',
          label: 'ชื่อบริษัท',
          type: 'text',
          value: '',
          required: true,
          order: 2,
          options: []
        },
        {
          controlType: 'textbox',
          key: 'taxID',
          label: 'Tax ID',
          type: 'text',
          value: '',
          required: true,
          order: 3,
          options: []
        },
        {
          controlType: 'textarea',
          key: 'companyAddress',
          label: 'ที่อยู่',
          type: 'text',
          value: '',
          required: true,
          order: 4,
          options: []
        },
        {
          controlType: 'checkbox',
          key: 'isActive',
          label: 'สถานะ',
          value: true,
          required: true,
          order: 1,
          options: []
        },
      ]
    },
    {
      key: 'users',
      value: 'ข้อมูลผู้ใช้',
      order: 2,
      table: {
        displayedColumns: ['firstName', 'email', 'userCompany', 'userRole', 'isActive', 'menu'],
        columns: [
          { key: 'firstName', value: 'ชื่อ-สกุล' },
          { key: 'email', value: 'Email' },
          { key: 'userCompany', value: 'บริษัท' },
          { key: 'userRole', value: 'บทบาท' },
          { key: 'isActive', value: 'สถานะใช้งาน' },
        ]
      },
      forms: [
        { key: 'id', value: null },
        {
          controlType: 'textbox',
          key: 'firstName',
          label: 'ชื่อ',
          type: 'text',
          value: '',
          required: true,
          order: 1,
          options: []
        },
        {
          controlType: 'textbox',
          key: 'lastName',
          label: 'นามสกุล',
          type: 'text',
          value: '',
          required: true,
          order: 1,
          options: []
        },
        {
          controlType: 'textbox',
          key: 'email',
          label: 'Email',
          type: 'text',
          value: '',
          required: true,
          order: 1,
          options: []
        },
        {
          controlType: 'lookup',
          key: 'userCompany',
          label: 'บริษัท',
          value: '',
          required: true,
          order: 1,
          lov: 'companies'
        },
        {
          controlType: 'dropdown',
          key: 'userRole',
          label: 'บทบาท',
          value: '',
          required: true,
          order: 1,
          options: [
            { key: 'admin', value: 'ผู้ดูแลระบบ' },
            { key: 'user', value: 'ผู้ใช้' }
          ]
        },
        {
          controlType: 'checkbox',
          key: 'isActive',
          label: 'สถานะ',
          value: true,
          required: true,
          order: 1,
          options: []
        },
      ]
    },

    LayoutContactFackDb.Layouts,
    LayoutContactNoteFackDb.Layouts,
    LayoutContactActivitiesFackDb.layouts,
    LayoutContactDeals.layouts,

    LayoutDeals.layouts,
    LayoutsFmMk06.layouts,
    LayoutsFmMk13.layouts,
    LayoutsFmMk11.layouts,
    LayoutsPO.layouts,

    LayoutCustomer.layouts,
    LayoutNote.layouts,

    LayoutActivityTask.layouts,
    LayoutActivityEvent.layouts,
    LayoutActivityCall.layouts,

  ];
}
