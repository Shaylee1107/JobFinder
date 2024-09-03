import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";
import FavoritesProvider from './Providers/FavoritesProvider';
import LoadingProvider from './Providers/LoadingProvider';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <mockServiceWorker>
      <LoadingProvider>
      <FavoritesProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </FavoritesProvider>
      </LoadingProvider>
      </mockServiceWorker>
    </StrictMode>
  );


  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(
  //   <StrictMode>
  //     <mockServiceWorker>
  //     <LoadingProvider>
  //     <FavoritesProvider>
  //       <HashRouter>
  //         <App />
  //       </HashRouter>
  //     </FavoritesProvider>
  //     </LoadingProvider>
  //     </mockServiceWorker>
  //     </StrictMode>
  // );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
