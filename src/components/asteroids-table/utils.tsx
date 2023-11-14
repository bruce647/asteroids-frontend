import { ColumnsType } from "antd/es/table";

export type DataType = {
    name: string;
    minerals: number;
    currentMiner: string;
    position: Position;
}

type Position = {
    x: number,
    y: number
}

export const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <div>{text}</div>,
    },
    {
        title: 'Minerals',
        dataIndex: 'minerals',
        key: 'minerals',
        render: (text) => <div style={text === 0 ? { color: 'red' } : undefined}>{text}</div>,
    },
    {
        title: 'CurrentMiner',
        dataIndex: ' currentMiner',
        key: ' currentMiner',
        render: (data) => <div>{data ? data : 'null'}</div>
    },
    {
        title: 'Position',
        key: 'position',
        dataIndex: 'position',
        render: (data) => <div>{data.x},{data.y}</div>
    },
];