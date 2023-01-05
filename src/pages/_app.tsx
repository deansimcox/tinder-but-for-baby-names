import React from "react";

import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { GenderProvider } from "../contexts/GenderContext";
config.autoAddCss = false;

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <GenderProvider>
        <Component {...pageProps} />
      </GenderProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
