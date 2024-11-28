// src/Login.tsx
import React from 'react';
import "./styles.less";

const Login: React.FC = () => {
  return (
    <div>
      <input type="text" placeholder="Username"className={'Login'} />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </div>
  );
};

export default Login;
