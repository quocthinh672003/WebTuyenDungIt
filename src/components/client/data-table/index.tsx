import {
    ParamsType,
    ProTable,
    ProTableProps,
} from '@ant-design/pro-components';
//   import { getLocale } from '@umijs/max';
// import styles from './styles.module.scss';
import vi_VN from 'antd/locale/vi_VN';
import enUS from 'antd/lib/locale/en_US';
import { ConfigProvider } from 'antd';

const DataTable = <
    T extends Record<string, any>,
    U extends ParamsType = ParamsType,
    ValueType = 'text',
>({
    columns,
    defaultData = [],
    dataSource,
    postData,
    // locale = getLocale(),
    pagination,
    // sticky = { offsetHeader: 50 },
    loading,
    rowKey = (record) => record.id,
    // scroll = { x: 2000 },
    params,
    request,
    search,
    polling,
    toolBarRender,
    headerTitle,
    actionRef,
    dateFormatter = 'string',
    rowSelection,
}: ProTableProps<T, U, ValueType>) => {
    return (
        <ConfigProvider locale={vi_VN}>
            <ProTable<T, U, ValueType>
                // className={styles.table}
                columns={columns}
                defaultData={defaultData}
                dataSource={dataSource}
                postData={postData}
                pagination={pagination}
                bordered
                // sticky={sticky}
                loading={loading}
                rowKey={rowKey}
                // scroll={scroll}
                params={params}
                request={request}
                search={search}
                polling={polling}
                toolBarRender={toolBarRender}
                headerTitle={headerTitle}
                actionRef={actionRef}
                dateFormatter={dateFormatter}
                rowSelection={rowSelection}
            />
        </ConfigProvider>
    );
};

export default DataTable;