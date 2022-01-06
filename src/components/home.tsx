import lscache from 'lscache';
import React, { useState } from 'react';

export default function Home(): JSX.Element {
  const [user, setUser] = useState(lscache.get('user'));
  return (
    <div>
      {!user ? (
        <h1>faça login ou resgistre</h1>
      ) : (
        <h1>{user.name + ' ' + user.userId}</h1>
      )}
    </div>
  );
}
