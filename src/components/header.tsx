import React, { useState } from 'react';
import exitTheAccount from '../services/exit-the-account';
import { Link } from 'react-router-dom';

//icons
import {
  BsChevronDown,
  BsFillGearFill,
  BsBoxArrowInRight,
} from 'react-icons/bs';

import './style/header-style.css';

interface Props {
  user: any;
}

export default function Header(props: Props): JSX.Element {
  const [closeComponent, setCloseComponent] = useState(true);
  function openAndCloseComponent(): void {
    if (closeComponent) {
      setCloseComponent(false);
    } else {
      setCloseComponent(true);
    }
  }
  return (
    <div className="header-component">
      {!props.user ? (
        <ul className="header-content">
          <Link to="/login">
            <li>Entrar</li>
          </Link>
          <Link to="/register">
            <li>Cadastrar</li>
          </Link>
        </ul>
      ) : (
        <div
          className="header-content-logged"
          onClick={() => openAndCloseComponent()}
        >
          <div className="header-content-logged-content">
            <div className="avatar-content">
              <img src={props.user.avatarUrl} alt="" />
            </div>
            <h1>{props.user.userName}</h1>
            <BsChevronDown
              className="icon-close-open"
              id={closeComponent ? 'close-true' : 'close-false'}
              size="20"
            />
          </div>
          <div
            className="option-count"
            id={closeComponent ? 'close-true' : 'close-false'}
          >
            <ul>
              <li>
                <BsFillGearFill size="17" />
                <a href="">Configuração</a>
              </li>
              <li onClick={() => exitTheAccount('user')}>
                <BsBoxArrowInRight size="18" color="red" />
                <a>Sair</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
