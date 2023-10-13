import { type AppType } from "next/app";

import { api } from "substantive_project/utils/api";

import "substantive_project/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
