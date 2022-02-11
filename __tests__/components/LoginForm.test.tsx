import LoginForm from '@components/LoginForm'
import { render } from '@testing-library/react'

describe('LoginForm 테스트', () => {
    test('텍스트 확인', () => {
        let container = render(<LoginForm />).container

        expect(container.querySelector('.logo-wrapper')?.textContent).toBe('로고')
    })
})
