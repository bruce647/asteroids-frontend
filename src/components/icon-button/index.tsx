import { Button, Flex } from "antd";
import styles from './iconButton.module.less'

type Props = {
    children: JSX.Element;
    isSelected?: boolean
}

export function IconButton({ children, isSelected }: Props) {
    return (<Button type='primary' style={{ height: '100%', color: '#9499C3', padding: '8px 15px', fontSize: '16px', fontWeight: 500 }} className={isSelected ? styles.isSelected : styles.noBoxShadow}><Flex vertical align='center' >{children}</Flex></Button>)
}
