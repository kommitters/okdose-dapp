// React
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './i18n/i18n';
import App from './App';
import { Wallet } from '../okdose/near/near-wallet';

const wallet = new Wallet({ createAccessKeyFor: process.env.MAIN_ACCOUNT });

// Setup on page load
window.onload = async () => {
  await wallet.startUp();

  ReactDOM.render(
    <Suspense fallback="loading">
      <App wallet={wallet} />
    </Suspense>,
    document.getElementById('root'),
  );
};
