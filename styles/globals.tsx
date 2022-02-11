import { css, Global } from '@emotion/react'
import emotionReset from 'emotion-reset'

export const globalStyles = (
    <Global
        styles={css`
            ${emotionReset}
            *, *::after, *::before {
                box-sizing: border-box;
                -moz-osx-font-smoothing: grayscale;
                -webkit-font-smoothing: antialiased;
                font-smoothing: antialiased;
            }

            html,
            body,
            #__next {
                height: 100%;
            }
        `}
    />
)
