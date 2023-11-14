import { Flex, Select, } from "antd";
import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { addMiner } from "@/services/miners";
import { SyncOutlined } from '@ant-design/icons';



type FieldType = {
    name?: string;
    planet?: string;
};

export function MinersForm() {
    const [loading, setLoading] = useState(false)
    const [newMiner, setNewMiner] = useState()

    async function onFinish(values: any) {
        setLoading(true)
        const data = await addMiner(values.name, values.planet)
        setNewMiner(data)
        setLoading(false)
    };

    function renderSuceess() {
        return (
            <h2>The miner was successfully created</h2>)
    };

    return (
        <>
            {loading ? <SyncOutlined spin /> : <Flex vertical align="center">

                {!!newMiner ? renderSuceess() :
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ width: '100%', paddingLeft: "200px" }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        autoComplete="off"
                        layout="vertical"
                    > <h2 >Create a miner</h2>
                        <Form.Item<FieldType>
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input miner name!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Planet"
                            name="planet"
                            rules={[{ required: true, message: 'Please select a planet!' }]}
                        >
                            <Select options={[
                                { value: '65534ef979b4b9c191484e72', label: 'Planet1' },
                                { value: '65534ef979b4b9c191484e73', label: 'Planet2' },
                                { value: '65534ef979b4b9c191484e74', label: 'Planet3' },
                            ]} />
                        </Form.Item>


                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>}
            </Flex>}</>
    )
}