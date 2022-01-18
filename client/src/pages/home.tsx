import lscache from 'lscache';
import React, { useEffect, useState } from 'react';
import { GoAlert } from 'react-icons/go';
import '../assets/style/home.css';
import Chat from '../components/chat';
import Header from '../components/header';

export default function Home(): JSX.Element {
  const [user] = useState(lscache.get('user'));
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!user) {
      setError(true);
    } else {
      setError(false);
    }
  }, []);

  return (
    <div className="home-component">
      <div className="error-component" id={'display-error-' + error}>
        <div className="error-content">
          <div className="error-button-back">
            <button type="button"></button>
          </div>
          <h1>
            <GoAlert className="icon-alert" size="23" color="orange" />
            Voce precisa estar logado para mandar um menssagem!
          </h1>
        </div>
      </div>
      <Header user={user} />
      <Chat user={user} />
    </div>
  );
}
