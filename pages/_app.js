import Navigation from "@/component/navigation";
import Head from "next/head";
import "@/styles/globals.css";
import { AuthProvider } from "../context/AuthContext";

export default function App({ Component, pageProps }) {
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
