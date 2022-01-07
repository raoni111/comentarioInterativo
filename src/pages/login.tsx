import React, { useState } from 'react';
import './../assets/style/login-style.css';
import logIntoAccount from '../services/logIntoAccount';

export default function Login(): JSX.Element {
  const [inputIsVisible, setInputIsVisible] = useState(false);

  function inputVisibility(checkElement: HTMLInputElement): void {
    const boolean = checkElement.checked;
    setInputIsVisible(boolean);
  }
  return (
    <div className="login-elemento">
      <div className="login-content">
        <div className="header-register-content">
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
            <button type="submit" onClick={() => logIntoAccount()}>
              entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
