import { Typography } from 'antd'
import { HomeIcon } from '../icons'
import styles from './header.module.less'

export function Header() {

    return (
        <header className={styles.navbarWrapper}>
            <div className={styles.navbarInner}>
                <div className={styles.mainSection}>
                    <HomeIcon />
                    <Typography className={styles.titleText}>BACKEND MINER</Typography>
                </div>
            </div>
        </header>
    )
}