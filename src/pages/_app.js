import Layout from "@/components/Layout/layout";
import "@/styles/globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 500);
  }, []);

  return (
    <>
      {load ? (
        <div className="h-[100vh] bg-blue-50 flex justify-center items-center ">
          <div className="loader mt-[-50px]"></div>
        </div>
      ) : (
        <div>
          {pageProps.statusCode == 404 ? (
            <div>
              <Link href="/">
                <Component {...pageProps} />
              </Link>
            </div>
          ) : (
            <div>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </div>
          )}
        </div>
      )}
    </>
  );
}
