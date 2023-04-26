import "../styles/globals.css";
import { GlobalStyle } from "../styles/GlobalStyle.Styled";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
