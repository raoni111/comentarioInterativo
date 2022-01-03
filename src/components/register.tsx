import React, { useState } from 'react';
import { CreateUser } from '../class/create-user';
import { PostUser } from '../class/postUser';
import { ValidForm } from '../class/valid-form';
import './style/register-style.css';

export default function Login(): JSX.Element {
  const [inputIsVisible, setInputIsVisible] = useState(false);

  function validForm(
    userName: HTMLInputElement,
    name: HTMLInputElement,
    email: HTMLInputElement,
    password: HTMLInputElement,
    passwordTwo: HTMLInputElement,
  ): boolean {
    const validForm = new ValidForm(
      userName,
      name,
      email,
      password,
      passwordTwo,
    );
    return validForm.checkout();
  }
  function createAnAccount(): void {
    const userName = document.getElementById('name-user') as HTMLInputElement;
    const name = document.getElementById('name') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;
    const passwordTwo = document.getElementById(
      'password-two',
    ) as HTMLInputElement;
    if (!validForm(userName, name, email, password, passwordTwo)) {
      return;
    }
    const user = new CreateUser(
      userName.value,
      name.value,
      email.value,
      password.value,
    );
    const postUser = new PostUser(user);
    postUser.post();
  }
  function inputVisibility(checkElement: HTMLInputElement): void {
    const boolean = checkElement.checked;
    setInputIsVisible(boolean);
  }
  return (
    <div className="login-elemento">
      <div className="login-content">
        <div className="user-name-content">
          <input
            type="text"
            name="name-user"
            id="name-user"
            placeholder="nome de usuário"
            autoComplete="off"
          />
        </div>
        <div className="name-content">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            autoComplete="off"
          />
        </div>
        <div className="email-content">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            autoComplete="off"
          />
        </div>
        <div className="password-content">
          <input
            type={inputIsVisible ? 'text' : 'password'}
            name="password"
            id="password"
            placeholder="senha"
            autoComplete="off"
          />
        </div>
        <div className="password-two-content">
          <input
            type={inputIsVisible ? 'text' : 'password'}
            name="password-two"
            id="password-two"
            placeholder="repita a senha"
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
          <button type="submit" onClick={() => createAnAccount()}>
            Registrar
          </button>
        </div>
      </div>
    </div>
  );
}
