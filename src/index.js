import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./styles/theme";

import { BrowserRouter } from "react-router-dom";

import App from './App';
import { PublicClientApplication, EventType } from '@azure/msal-browser';


const pca = new PublicClientApplication({
    auth: {
        clientId: 'e48f8f0a-6dce-492e-b672-40870ef09719',
        authority: 'https://login.microsoftonline.com/63ea54b8-c60c-4d02-afba-441f22cd7bbe/',
        rediractUri: '/',
    }
})

pca.addEventCallback(event => {
    if (event.eventType === EventType.LOGIN_SUCCESS){
        console.log(event);
        pca.setActiveAccount(event.payload.account)
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App msalInstance={pca}/>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
