import type { NextPage } from 'next'
import Head from 'next/head'
import AppLayout from '@components/AppLayout'
import LoginForm from '@components/LoginForm'

const Login: NextPage = () => {
    return (
        <>
            <Head>
                <title>로그인</title>
            </Head>
            <LoginForm />
        </>
    )
}

export default Login
