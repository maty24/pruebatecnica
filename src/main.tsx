import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App/App.tsx";
import {Provider} from "react-redux";
import store from "./App/store.ts";
import {ThemeProvider} from "styled-components";
import theme from "./components/styles/theme.ts";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
)
