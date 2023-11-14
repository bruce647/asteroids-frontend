
import { InfoTabs } from '@/components/info-tab'
import { getAsteroids } from '@/services/asteroids';
import { getMiners } from '@/services/miners';
import { getPlanets } from '@/services/planets';
import { Col, Row, Typography, } from 'antd'
import Image from 'next/image'
import io from 'socket.io-client';
import styles from './home.module.less'
import { useEffect, useState } from 'react';
import { serviceURL } from '@/services/constans';



function Home(props: any) {

    const [miners, setMiners] = useState(props.miners);
    const [planets, setPlanets] = useState(props.planets);
    const [asteroids, setAsteroids] = useState(props.asteroids);

    useEffect(() => {
        const socket = io(serviceURL)

        socket.onAny((...args) => {
            setMiners(args[1].miners)
            setPlanets(args[1].planets)
            setAsteroids(args[1].asteroids)
        });
        socket.on("connect", () => {
            console.log("socket connect success");
        });
        socket.on("connect_error", (err) => {
            console.log("socket connect err", err);
        });

        // Cleanup socket connection on unmount
        return () => {
            socket.disconnect();
        };
    }, []);


    return (
        <Row gutter={[16, 16]} style={{ marginTop: '12px', marginLeft: '32px', marginRight: '32px', height: '100%' }}>
            <Col lg={10} sm={24}><InfoTabs props={{ miners, planets, asteroids }} /></Col>

            <Col xl={12} lg={0} md={0} sm={0} xs={0}>
                <Typography>250 YEARS</Typography>
                <div className={styles.imageContainer}>
                    <Image
                        alt="test"
                        fill
                        style={{ border: '2px solid #3F4055' }}
                        src={
                            'https://s3-alpha-sig.figma.com/img/211c/797f/4a3fd801badf1e3ce2b852db8c8460de?Expires=1701043200&Signature=FLMt0v0YNx7c981Xx~FUtyowa6b~YmUOnUweTKueLCWqKQBrknQwaSJsB9vGApVzfZNPnGkpNbyttal~pa6WWm753S70Z90aTbOTEDvxbjAuiF95ODmAxlLeaap~7LzqhsgheJfc7jYqOwahC0Se7HVQmnZpTsqkQE7RYt4LUoxyeQ7eXj7Uz4qdxXDaQmzBKEorHuRfxACD0511y3mkzmddsusOzyggWcUnWLvsgYvxc3Q0ocZA-mWISr2g2bYKBxCu~~H7vQ2jTz4sqst5Z12EDMuCWV7Xjc-TPaidH3tWnlm9u9g8AGm7ELCpF8xUydQ3HIliyjv4B9phgPqmcQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                        objectFit="cover"
                    />
                </div></Col>
        </Row>
    )
}

export async function getServerSideProps() {
    const miners = await getMiners();
    const planets = await getPlanets();
    const asteroids = await getAsteroids();
    return {
        props: {
            miners,
            planets,
            asteroids
        },
    };
}

export default Home;