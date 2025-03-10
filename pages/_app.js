import { useEffect } from "react";
import "../styles/index.css";
import Nav from "../components/Navbar";
import Footer from "../components/footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/67b58c1270154f190a9e6d9a/1ikeimamm";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup to prevent duplicate scripts
    };
  }, []);

  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
