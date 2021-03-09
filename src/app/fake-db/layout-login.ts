export class LayoutLogin {
    public static layout = {
        key: 'login',
        value: 'เข้าสู่ระบบ',
        order: 1,
        table: {},
        forms: [
            {
                controlType: 'textbox',
                key: 'email',
                label: 'Email',
                type: 'email',
                value: '',
                required: true,
                order: 1,
                options: []
            },
            {
                controlType: 'textbox',
                key: 'password',
                label: 'Password',
                type: 'password',
                value: '',
                required: true,
                order: 2,
                options: []
            }
        ]
    }
}