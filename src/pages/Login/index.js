import React, { useState, useContext } from 'react'
import { LoginContainer, Form, Field, Actions, Label, Input } from './styles'

import { AuthContext } from '../../service/auth'

function Login () {

  const { authenticated, login } = useContext(AuthContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //inibe ação padrão do form
    login(email, password);
  }

  return (
    <LoginContainer>
      <h1>Login do Sistema</h1>
      <p>{String(authenticated)}</p>
      <Form onSubmit={handleSubmit}>
        <Field>
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <Input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Field>
        <Actions>
          <button type="submit">Entrar</button>
        </Actions>
      </Form>
    </LoginContainer>
  )
}

export default Login;