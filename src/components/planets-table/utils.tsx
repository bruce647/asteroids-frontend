import { Table, Button, Flex } from "antd";
import { SyncOutlined } from '@ant-design/icons';
import { ColumnsType } from "antd/es/table";
import { AddIcon } from "../icons";
import { DataType, getMinerStatus } from "../miners-table/utils";
export type Planet = {
    name: string;
    miners: number;
    minerals: number;
    _id: string
}

export function getTableColumns(onClick: (id: string) => void, showCreate: () => void): ColumnsType<Planet> {
    return [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => <a onClick={() => {
                onClick(record._id)
            }
            }>{text}</a>,
        }, {
            title: 'Miners',
            key: 'miners',
            dataIndex: 'miners',
        },
        {
            title: 'Minerals',
            dataIndex: 'minerals',
            key: 'minerals',
            render: (text) => <div style={text >= 1000 ? { color: 'green' } : undefined}>{text}/1000</div>,
        },
        {
            title: null,
            render: (data, record) => { if (record.minerals >= 1000) return <Button type='text' style={{ color: '#00F0FF', fontWeight: 500 }} onClick={showCreate}><Flex align="center" gap={4}><AddIcon />Create a miner</Flex></Button> }
        },
    ];
}

export const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'carryCapacity',
        dataIndex: 'carryCapacity',
        key: 'carryCapacity',
        render: (data) => <div style={data === 200 ? { color: 'green' } : undefined}>{data}/200</div>
    },
    {
        title: 'travelSpeed',
        key: 'travelSpeed',
        dataIndex: 'travelSpeed',

    },
    {
        title: 'miningSpeed',
        key: 'miningSpeed',
        dataIndex: 'miningSpeed'
    },
    {
        title: 'Position',
        key: 'Position',
        dataIndex: 'x',
        render: (data, record) => <div>{Math.floor(record.x)},{Math.floor(record.y)}</div>
    },
    {
        title: 'Status',
        key: 'Status',
        dataIndex: 'status',
        render: (data) => getMinerStatus(data)
    },
];

export function getPlanetBody(miners: DataType[] | undefined) {
    return <Flex vertical align="center"><h2 >List of miners of Pl1</h2>
        {miners ? <div style={{ position: 'relative', width: '100%' }}><Table columns={columns} dataSource={miners} pagination={false} /></div> : <SyncOutlined spin />} </Flex>
}
