import { Tabs } from 'antd'
import { getTabItems } from './utils';
import { useState } from 'react';


export function InfoTabs({ props }: any) {
    const [currKey, setCurrKey] = useState('0')
    return (
        <>
            <Tabs items={getTabItems(props, currKey)} activeKey={currKey} onTabClick={(key) => setCurrKey(key)} />
        </>
    )
}