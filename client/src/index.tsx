import React from "react";
import ReactDOM from "react-dom/client";

import App from "@/app/App";
import { ErrorBoundary } from "@/app/providers/ErrorBoundary";
import { ReduxProvider } from "./app/providers/ReduxProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
