import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0, // 요청 실패했을 경우 재요청 횟수
      suspense: true, // React.Suspense를 사용할 때
    },
  },
});

root.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </RecoilRoot>
);
