import type { AppProps } from 'next/app'
import Head from 'next/head'
import { globalStyles } from '../styles/globals'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
            </Head>
            {globalStyles}
            <Component {...pageProps} />
        </>
    )
}
export default MyApp
