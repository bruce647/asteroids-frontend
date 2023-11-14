
import { ConfigProvider } from 'antd'
import { AppProps } from 'next/app'
import Head from 'next/head'
import '../global.less'
import { Header } from '@/components/header'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#191A29',
                        colorText: '#fff',
                    },
                }}
            >
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <div style={{ height: '100%' }}>
                    <Header />
                    <Component {...pageProps} />
                </div>
            </ConfigProvider>
        </>
    )
}