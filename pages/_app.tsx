import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyles";
import { theme1, theme2 } from "../styles/theme";
import { AuthProvider } from "../src/contexts/AuthContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={theme2}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}
