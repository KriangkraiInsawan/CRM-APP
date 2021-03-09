export class LayoutNote {
    public static layouts = {
        key: 'notes',
        value: 'บันทึกโน๊ต',
        order: 1,
        table: {
            displayedColumns: ['noteTitle', 'noteSubject', 'menu'],
            columns: [
                { key: 'noteTitle', value: 'Title' },
                { key: 'noteSubject', value: 'Subject' }
            ]
        },
        forms: [
            { key: 'id', value: null },
            {
                controlType: 'textbox',
                key: 'noteTitle',
                label: 'Title',
                type: 'text',
                value: '',
                required: true,
                order: 1,
                options: []
            },
            {
                controlType: 'textarea',
                key: 'noteSubject',
                label: 'Subject',
                type: 'text',
                value: '',
                required: true,
                order: 1,
                options: []
            },
            {
                controlType: 'lookup',
                key: 'noteRelateID',
                label: 'RelateTo',
                type: 'text',
                value: '',
                required: true,
                order: 1,
                lov: 'relateTo'
            },
            {
                controlType: 'lookup',
                key: 'dealID',
                label: 'DealID',
                type: 'text',
                value: '',
                required: false,
                order: 1,
                options: [],
                lov: 'deals'
            },
            // {
            //     controlType: 'textbox',
            //     key: 'owner',
            //     label: 'ผู้รับผิดชอบ',
            //     type: 'text',
            //     value: '',
            //     required: true,
            //     order: 1,
            //     options: []
            // },
        ]
    }
}