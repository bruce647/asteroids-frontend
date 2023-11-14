import { Modal, Table } from "antd";
import { Planet, getPlanetBody, getTableColumns } from "./utils";
import { useState } from "react";
import { getMinersByPlanetId } from "@/services/miners";
import { DataType } from "../miners-table/utils";
import { MinersForm } from "../miner-form";

type Props = {
    planets: Planet[]
}

export function PlanetsTable({ planets }: Props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [miners, setMiners] = useState<DataType[]>()

    async function showModal(id: string) {
        setIsModalOpen(true);
        const data = await getMinersByPlanetId(id)
        setMiners(data)
    };

    function showCreate() {
        setIsCreateModalOpen(true)
    }

    const handleCancel = () => {
        setIsModalOpen(false);
        setIsCreateModalOpen(false)
    };

    return (
        <>
            <Table columns={getTableColumns(showModal, showCreate)} dataSource={planets} />
            <Modal open={isModalOpen} onCancel={handleCancel} footer={null} ><div>{getPlanetBody(miners)}</div></Modal>
            <Modal open={isCreateModalOpen} onCancel={handleCancel} footer={null} ><MinersForm /></Modal>
        </>
    )
}