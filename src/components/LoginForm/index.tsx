import { useRouter } from 'next/router'
import React, { useState, useCallback } from 'react'
import { formStyle, inputIdStyle, inputPwStyle, loginButtonStyle, LoginLayout } from './styles'

const LoginForm = () => {
    const router = useRouter()

    const [id, setId] = useState('')
    const [password, setPassword] = useState('')

    const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value)
    }, [])

    const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }, [])

    return (
        <LoginLayout>
            <div className="logo-wrapper">
                <div className="logo" onClick={(e) => router.push('/')}>
                    로고
                </div>
            </div>
            <form css={formStyle}>
                <div>
                    <input
                        name="user-id"
                        value={id}
                        type="text"
                        onChange={onChangeId}
                        placeholder="아이디"
                        css={inputIdStyle}
                    />
                </div>
                <div>
                    <input
                        name="user-password"
                        type="password"
                        value={password}
                        onChange={onChangePassword}
                        placeholder="비밀번호"
                        css={inputPwStyle}
                    />
                </div>
                <div>
                    <input type="button" value="로그인" css={loginButtonStyle} onClick={() => router.push('/')} />
                </div>
            </form>
        </LoginLayout>
    )
}

export default LoginForm
