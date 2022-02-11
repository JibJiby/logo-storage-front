import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const formStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 5rem;
    padding: 24px;
`

export const inputIdStyle = css`
    width: 25rem;
    height: 2.5rem;
    border-radius: 6px 6px 0 0;
    box-shadow: none;
    border: 1px solid #dadada;
    font-size: 16px;
    letter-spacing: -0.5px;
    padding: 17px 18px 17px 19px;
`

export const inputPwStyle = css`
    width: 25rem;
    height: 2.5rem;
    border-radius: 0 0 6px 6px;
    box-shadow: none;
    border: 1px solid #dadada;
    font-size: 16px;
    padding: 17px 18px 17px 19px;
`

export const loginButtonStyle = css`
    width: 25rem;
    margin-top: 40px;
    height: 3rem;
    border-radius: 6px;
    box-shadow: none;
    border: 1px solid #dadada;
    font-size: 18px;
    font-weight: bold;
    background-color: tomato;
    color: whitesmoke;

    &:hover {
        opacity: 70%;
        transition-duration: 0.4s;
    }
`

/**
 * styled
 */

export const LoginLayout = styled.div`
    width: 100%;
    height: 100%;
    background: rgb(247, 247, 248);
    display: flex;
    align-content: center;
    flex-direction: column;

    .logo-wrapper {
        text-align: center;
        margin-top: 10rem;
        padding-bottom: 25px;
    }

    .logo {
        font-weight: bold;
        cursor: pointer;
        user-select: none;
        font-size: 3rem;
        display: inline-block;
    }
`
