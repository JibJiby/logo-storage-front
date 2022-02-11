import type { NextPage } from 'next'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import LoginForm from '../components/LoginForm'

const Login: NextPage = () => {
    return (
        <>
            <Head>
                <title>회원가입</title>
            </Head>
            <AppLayout>
                <LoginForm />
            </AppLayout>
        </>
    )
}

export default Login
