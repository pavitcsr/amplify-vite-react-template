// src/components/Login.tsx

import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function Login({ onSignIn }: { onSignIn: () => void }) {
  return (
    <Authenticator>
      {({ signOut }) => {
        onSignIn(); // เรียก Callback หลังจาก Sign In
        return (
          <div>
            <p>Signing in...</p>
          </div>
        );
      }}
    </Authenticator>
  );
}

export default Login;
