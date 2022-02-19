import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./../styles/GlobalStyles";
import { theme1, theme2 } from "../styles/theme";
import "../styles/globals.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme2}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
