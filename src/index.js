import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider } from 'antd';
import zh_TW from 'antd/lib/locale-provider/zh_TW';

ReactDOM.render(
  <Router>
    <ConfigProvider locale={zh_TW}>
      <App />
    </ConfigProvider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
