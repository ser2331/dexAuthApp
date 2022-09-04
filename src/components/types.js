
export default class Types {
    static routing = [
        { id: 0, key: 'dashboard', value: '/dashboard' },
        { id: 1, key: 'reports', value: '/reports' },
        { id: 2, key: 'invoices', value: '/documents/invoices' },
        { id: 3, key: 'drafts', value: '/documents/drafts' },
        { id: 4, key: 'templates', value: '/documents/templates' },
        { id: 5, key: 'customers1', value: '/customers/1' },
        { id: 6, key: 'customers2', value: '/customers/2' },
        { id: 7, key: 'settings', value: '/settings' },
        { id: 8, key: 'help', value: '/help' },
    ];

    static routingMap = Types.routing.reduce((acc, item) => acc.set(item.key, { ...item }), new Map());

    static reportsTableColumns = [
        { title: 'Описание', dataIndex: 'description', },
        { title: 'Категория', dataIndex: 'category', },
        { title: 'Кол-во', dataIndex: 'amount', },
        { title: 'Цена', dataIndex: 'expectedPrice', },
        { title: 'Стоимость', dataIndex: 'price', },
    ];

    static appSizes = [
        { id: 0, key: 'mobile', size: 320, value: true },
        { id: 1, key: 'desktop', size: 1152, value: false },
    ];

    static appSizesMap = Types.appSizes.reduce((acc, item) => acc.set(item.key, { ...item }), new Map());
}
