import React, { useState } from 'react';
import ValidFormLogin from '../class/valid-form-login';
import { login } from '../class/login';
import './style/login-style.css';
import Utils from '../class/utils/checks-end-utils';

export default function Login(): JSX.Element {
  const [inputIsVisible, setInputIsVisible] = useState(false);

  function validForm(
    userName: HTMLInputElement,
    password: HTMLInputElement,
  ): boolean {
    const validFormLogin = new ValidFormLogin(userName, password);
    return validFormLogin.checkout();
  }
  async function logIntoTheAccount(): Promise<void> {
    const userName = document.getElementById('name-user') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;
    if (!validForm(userName, password)) {
      return;
    }
    await login.login(userName.value, password.value).then((response) => {
      login.logged = response;
    });
    if (!login.logged) {
      Utils.displayError('nome de usurio ou senha incorreto', password);
      return;
    }
  }
  function inputVisibility(checkElement: HTMLInputElement): void {
    const boolean = checkElement.checked;
    setInputIsVisible(boolean);
  }
  return (
    <div className="login-elemento">
      <div className="login-content">
        <div className="header-login-content">
          <h1>Entre para postar um comentário</h1>
        </div>
        <div className="form">
          <div className="user-name-content">
            <input
              type="text"
              className="input-content"
              name="name-user"
              id="name-user"
              placeholder="nome de usuário"
              autoComplete="off"
            />
          </div>
          <div className="password-content">
            <input
              type={inputIsVisible ? 'text' : 'password'}
              className="input-content"
              name="password"
              id="password"
              placeholder="senha"
              autoComplete="off"
            />
          </div>
          <div className="checkbox-content">
            <input
              type="checkbox"
              name="input-visibility"
              id="input-visibility"
              onChange={(e) => inputVisibility(e.target as HTMLInputElement)}
            />
            <label htmlFor="input-visibility">Mastrar senha?</label>
          </div>
          <div className="button-contnet">
            <button type="submit" onClick={() => logIntoTheAccount()}>
              entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
