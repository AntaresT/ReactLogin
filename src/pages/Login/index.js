import React from 'react'
import { LoginContainer, Field } from './styles'

const Login = () => {
  return (
    <LoginContainer>
      <h1>Login do Sistema</h1>
      <form>
        <Field>
          <label for="email"></label>
          <input type="email" name="email" />
        </Field>
      </form>
    </LoginContainer>
  )
}

export default Login;