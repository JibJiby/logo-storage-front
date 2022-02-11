import React, { useState, useCallback } from 'react'
import { formStyle } from './styles'

const LoginForm = () => {
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')

    const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value)
    }, [])

    const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }, [])

    return (
        <form css={formStyle}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <input name="user-id" value={id} onChange={onChangeId} />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <input name="user-password" value={password} onChange={onChangePassword} />
            </div>
        </form>
    )
}

export default LoginForm
