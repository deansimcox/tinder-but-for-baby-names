import React from "react";

import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { QueryClient, QueryClientProvider } from "react-query";
import react from "react";
import { GenderProvider } from "../contexts/GenderContext";
config.autoAddCss = false;

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <GenderProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </GenderProvider>
  );
}

export default MyApp;
