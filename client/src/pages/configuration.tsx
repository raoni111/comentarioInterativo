import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import lscache from 'lscache';
import Utils from '../class/utils/checks-end-utils';
import isEmail from 'validator/lib/isEmail';

//style
import '../assets/style/configuration.css';

// icons
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import setAccountInformation from '../services/setAccountInformation';

export default function Configuration(): JSX.Element {
  const [user, setUser] = useState(lscache.get('user'));
  const [_user, _setUser] = useState(user);

  function validConfiguration(): void {
    const name = document.getElementById('name') as HTMLInputElement;
    const userName = document.getElementById('user-name') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;

    if (!Utils.validLength(name.value)) {
      Utils.displayError(
        'nome de usuario precisa ter no minimo 8 caracteres',
        name,
      );
      return;
    }
    if (!Utils.validLength(userName.value)) {
      Utils.displayError(
        'nome de usuario precisa ter no minimo 8 caracteres',
        userName,
      );
      return;
    }
    if (!isEmail(email.value)) {
      Utils.displayError('email invalido', email);
      return;
    }
    console.log('teste');
    setAccountInformation(user.userId, 'name', name.value);
    setAccountInformation(user.userId, 'userName', userName.value);
    setAccountInformation(user.userId, 'email', email.value);
  }
  return (
    <div className="configuration-component" onChange={() => _setUser('')}>
      <div className="configuration-content">
        <div className="content-one">
          <h1>Configuração</h1>
        </div>
        <div className="form-content">
          <div className="name-content">
            <label htmlFor="name">Nome</label>
            <div>
              <FaUser size="17" />
              <input type="text" id="name" value={_user.name} />
            </div>
          </div>
          <div className="user-name-content">
            <label htmlFor="user-name">Nome de usuario</label>
            <br />
            <div>
              <FaUser size="17" />
              <input type="text" id="user-name" value={_user.userName} />
            </div>
          </div>
          <div className="email-content">
            <label htmlFor="email">email</label>
            <br />
            <div>
              <MdEmail size="20" />
              <input type="text" id="email" value={_user.email} />
            </div>
          </div>
          <div className="save-button-content">
            <button type="button" onClick={validConfiguration}>
              Salvar
            </button>
          </div>
        </div>
      </div>
      <div className="button-back-content">
        <Link to="/">
          <button type="button">Voltar</button>
        </Link>
      </div>
    </div>
  );
}
