import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/css/index.css";
import { RouterList } from "./routes/RouterList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { SkeletonTheme } from "react-loading-skeleton";
import { Provider } from "react-redux";
// KITA SUDAH MENGGUNAKAN WADAH YANG KITA PUNYA
import store from "./Redux/store/store";

const queryMovie = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* kita pasang wadah ke dalam injectornya */}
    <Provider store={store}>
      <QueryClientProvider client={queryMovie}>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_OAUTH_GOOGLE_ID}>
          <ChakraProvider>
            <SkeletonTheme baseColor="#e0e5e7" highlightColor="#f9fafa">
              <RouterList />
            </SkeletonTheme>
          </ChakraProvider>
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
