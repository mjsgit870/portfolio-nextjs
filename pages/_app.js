import "../styles/globals.css";
import Layout from "../component/layout";
import Loading from "../component/Loading";
import Router from "next/router";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });
  Router.events.on("routeChangeError", (url) => {
    setLoading(true);
  });

  return (
    <Layout>{loading ? <Loading /> : <Component {...pageProps} />}</Layout>
  );
}

export default MyApp;
