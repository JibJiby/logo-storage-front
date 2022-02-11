import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import { divNoneSelectionStyle } from '../../styles/common'
import { contentStyle, headerStyle } from './styles'

interface Props {
    children: React.ReactNode
}

const AppLayout = ({ children }: Props) => {
    const router = useRouter()

    return (
        <>
            <header css={headerStyle}>
                <div
                    css={divNoneSelectionStyle}
                    style={{ marginLeft: '30px' }}
                    onClick={(e) => {
                        e.preventDefault()
                        router.push('/')
                    }}
                >
                    홈버튼
                </div>
                <div
                    css={divNoneSelectionStyle}
                    style={{ marginRight: '30px' }}
                    onClick={(e) => {
                        e.preventDefault()
                        router.push('/login')
                    }}
                >
                    로그인 버튼
                </div>
            </header>
            <div css={contentStyle}>{children}</div>
        </>
    )
}

export default AppLayout
