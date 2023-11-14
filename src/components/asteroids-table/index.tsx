import { Table } from "antd";
import { DataType, columns } from "./utils";

type Props = {
    asteroids: DataType[]
}

export function AsteroidsTable({ asteroids }: Props) {
    return (
        <>
            <Table columns={columns} dataSource={asteroids} />
        </>
    )
}