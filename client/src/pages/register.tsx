import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { HiLockClosed } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { ValidFormRegister } from '../class/valid-form-register';
import './assets/style/register-style.css';

interface Props {
  readonly socket: any;
}

export default function Register(props: Props): JSX.Element {
  const [inputIsVisible, setInputIsVisible] = useState(false);

  useEffect(() => {
    props.socket.on('set.user.success', () => {
      document.location = '/login';
    });
    return props.socket.off('set.user.success', () => {
      document.location = '/login';
    });
  }, []);

  async function validForm(
    userName: HTMLInputElement,
    name: HTMLInputElement,
    email: HTMLInputElement,
    password: HTMLInputElement,
    passwordTwo: HTMLInputElement,
  ): Promise<boolean> {
    const validForm = new ValidFormRegister(
      userName,
      name,
      email,
      password,
      passwordTwo,
    );
    let formIsValid = false;
    await validForm.checkout().then((response) => {
      formIsValid = response;
    });
    return formIsValid;
  }
  async function createAnAccount(): Promise<void> {
    const form = document.getElementById('form-content');
    if (form) {
      const inputs = form.querySelectorAll('input');
      let _continue = false;
      await validForm(
        inputs[0],
        inputs[1],
        inputs[2],
        inputs[3],
        inputs[4],
      ).then((response) => {
        _continue = response;
      });
      if (!_continue) {
        return;
      }
      props.socket.emit('set.user', {
        userName: inputs[0].value,
        name: inputs[1].value,
        email: inputs[2].value,
        password: inputs[3].value,
      });
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
          <h1>Registre-se</h1>
        </div>
        <div className="form" id="form-content">
          <div className="user-name-content">
            <div>
              <FaUser size="15" />
              <input
                className="input-content"
                type="text"
                name="name-user"
                id="name-user"
                placeholder="nome de usuário"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="name-content">
            <div>
              <FaUser size="15" />
              <input
                className="input-content"
                type="text"
                name="name"
                id="name"
                placeholder="name"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="email-content">
            <div>
              <MdEmail size="20" />
              <input
                className="input-content"
                type="email"
                name="email"
                id="email"
                placeholder="email"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="password-content">
            <div>
              <HiLockClosed size="20" />
              <input
                className="input-content"
                type={inputIsVisible ? 'text' : 'password'}
                name="password"
                id="password"
                placeholder="senha"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="password-two-content">
            <div>
              <HiLockClosed size="20" />
              <input
                className="input-content"
                type={inputIsVisible ? 'text' : 'password'}
                name="password-two"
                id="password-two"
                placeholder="repita a senha"
                autoComplete="off"
              />
            </div>
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
