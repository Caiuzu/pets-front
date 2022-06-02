import '../ui/styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "@mui/material";
import theme from "../ui/themes/theme";

function MyApp({Component, pageProps}: AppProps) {
    return <ThemeProvider theme={theme}>
        <Component {...pageProps} />
    </ThemeProvider>
}

export default MyApp
