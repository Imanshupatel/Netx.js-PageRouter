import Navigation from "@/component/navigation";
import "@/styles/globals.css";
import { AuthProvider } from "../context/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <Navigation />
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}
