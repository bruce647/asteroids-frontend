import { Modal, Table } from "antd";
import { DataType, getMinerBody, getTableColumns } from "./utils";
import { useState } from "react";
import { getMinerHistory } from "@/services/miners";

type Props = {
    miners: DataType[]
}

export function MinersTable({ miners }: Props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [minerHistory, setMinerHistory] = useState();

    async function showModal(id: string) {
        setIsModalOpen(true);
        const data = await getMinerHistory(id)
        setMinerHistory(data)
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Table columns={getTableColumns(showModal)} dataSource={miners} />
            <Modal open={isModalOpen} onCancel={handleCancel} footer={null} ><div>{getMinerBody(minerHistory)}</div></Modal>
        </>
    )
}