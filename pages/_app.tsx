import React from "react";
import "../styles/global.css";
import { AppProps } from "next/app";

/**
 * This App component is the top-level component which will be common across all the different pages.
 * You can use this App component to keep state when navigating between pages, for example.
 * This is also where you add Global CSS Styles. You cannot import global CSS anywhere else
 */
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
