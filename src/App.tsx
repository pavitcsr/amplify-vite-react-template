// src/App.tsx

import React, { useState } from 'react';
import Login from './components/Login';
import S3FileList from './components/S3FileList';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <div>
      {!isSignedIn ? (
        <Login onSignIn={() => setIsSignedIn(true)} />
      ) : (
        <S3FileList />
      )}
    </div>
  );
}

export default App;
