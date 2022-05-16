import React from 'react';
import ReactDOM from 'react-dom/client';
import {MoralisProvider} from "react-moralis";
import App from './App';
import './index.scss';

const SERVER_URL='https://hqjw7ny8q5so.usemoralis.com:2053/server';
const APP_ID='M4qNca1QrD9sXCEZkTOh1XqvudschMrCPX2qgtMs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MoralisProvider serverUrl={SERVER_URL} appId={APP_ID}>
      <App/>
    </MoralisProvider>
  </React.StrictMode>
);
