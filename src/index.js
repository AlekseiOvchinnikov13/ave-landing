import React from 'react';
import ReactDOM from 'react-dom/client';
import {MoralisProvider} from "react-moralis";
import App from './App';
import './index.scss';

const SERVER_URL='https://t1aibv6kf0vy.usemoralis.com:2053/server';
const APP_ID='45cKo3c6T8LSAF89Dfpt4CjEst5ukjhwQN1BUnYQ';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MoralisProvider serverUrl={SERVER_URL} appId={APP_ID}>
      <App/>
    </MoralisProvider>
  </React.StrictMode>
);
