import { Button, Flex, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { Planet } from "../planets-table/utils";
import { SyncOutlined } from '@ant-design/icons';

export type DataType = {
    name: string;
    planet: Planet;
    carryCapacity: number;
    travelSpeed: number;
    miningSpeed: number;
    x: number;
    y: number;
    status: number;
    _id: string;
}

export type MinerHistory = {
    date: string;
    year: string;
    planet: string;
    carryCapacity: string;
    travelSpeed: string;
    miningSpeed: string;
    x: number;
    y: number;
    status: number;
}

export function getMinerStatus(status: number) {
    switch (status) {
        case 1:
            return 'Traveling'
        case 2:
            return 'Mining'
        case 3:
            return 'Transfering'
        default:
            return 'Idle'
    }
}

export function getPlanetName(id: string) {
    switch (id) {
        case '65534ef979b4b9c191484e72':
            return 'Planet1'
        case '65534ef979b4b9c191484e73':
            return 'Planet2'
        default:
            return 'Planet3'
    }
}

export function getTableColumns(onClick: (id: string) => void): ColumnsType<DataType> {
    return [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => <a onClick={() => {
                onClick(record._id)
            }
            }>{text}</a>,
        },
        {
            title: 'Planet',
            dataIndex: 'planet',
            key: 'planet',
            render: (planet) => <div>{getPlanetName(planet)}</div>
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
}

const columns: ColumnsType<MinerHistory> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <div>{text}</div>,
    },
    {
        title: 'Year',
        dataIndex: 'year',
        key: 'year',
        render: (text) => <div>{text}</div>
    },
    {
        title: 'Planet',
        dataIndex: 'planet',
        key: 'planet',
        render: (planet) => <div>{planet.name}</div>
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

export function getMinerBody(miners: MinerHistory[] | undefined) {
    return <Flex vertical align="center"><h2 >List of miners of Pl1</h2>
        {miners ? <div style={{ position: 'relative', width: '100%' }}><Table columns={columns} dataSource={miners} pagination={false} /></div> : <SyncOutlined spin />} </Flex>
}
