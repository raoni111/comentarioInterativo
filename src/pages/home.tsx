import lscache from 'lscache';
import React, { useState } from 'react';
import Header from '../components/header';
import '../assets/style/home.css';
import Chat from '../components/chat';

export default function Home(): JSX.Element {
  const [user, setUser] = useState(lscache.get('user'));
  return (
    <div className="home-component">
      <Header user={user} />
      <Chat user={user} />
    </div>
  );
}
