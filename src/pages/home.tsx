import lscache from 'lscache';
import React, { useState } from 'react';
import Header from '../components/header';

export default function Home(): JSX.Element {
  const [user, setUser] = useState(lscache.get('user'));
  return (
    <div>
      <Header user={user} />
    </div>
  );
}
