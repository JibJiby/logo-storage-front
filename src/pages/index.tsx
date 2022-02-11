import type { NextPage } from 'next'
import Head from 'next/head'
import AppLayout from '@components/AppLayout'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>홈</title>
            </Head>
            <AppLayout>홈</AppLayout>
        </>
    )
}

export default Home
