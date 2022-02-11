import { css } from '@emotion/react'
import { divNoneSelectionStyle } from '../../styles/common'
import { contentStyle, headerStyle } from './styles'

interface Props {
    children: React.ReactNode
}

const AppLayout = ({ children }: Props) => {
    return (
        <>
            <header css={headerStyle}>
                <div css={divNoneSelectionStyle} style={{ marginLeft: '30px' }}>
                    홈버튼
                </div>
                <div css={divNoneSelectionStyle} style={{ marginRight: '30px' }}>
                    로그인 버튼
                </div>
            </header>
            <div css={contentStyle}>{children}</div>
        </>
    )
}

export default AppLayout
