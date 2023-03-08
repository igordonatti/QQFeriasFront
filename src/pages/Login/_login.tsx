import React from 'react';
import * as C from './login.styles';
import { Input } from '../../Components/Input/Input'
import { Button } from '../../Components/Button/Button';

export const _login = () => {
  return (
    <C.Container>
      <C.DivLogin>
        <C.P>Usuário</C.P>
        <Input tipo="text" />
        <C.P>Senha</C.P>
        <Input tipo="password" />
        <Button text="Entrar"/>
      </C.DivLogin>
    </C.Container>
  )
}
