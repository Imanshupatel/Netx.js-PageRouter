import Navigation from "@/component/navigation";
import Head from "next/head";
import "@/styles/globals.css";
import { AuthProvider } from "../context/AuthContext";
import { useEffect, useState } from "react";
import Loading from "@/component/Loading";
// import { Loading } from "@/components/Loading";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    },); // Fake delay (2 sec) — replace with real data load
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/game.png" type="image/jpg" />
        <title>Esports Gaming Site</title>
        <meta name="description" content="Shaping the Future of Esports" />
      </Head>
      <AuthProvider>
        <Navigation />
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}
