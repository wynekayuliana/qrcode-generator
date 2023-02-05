import { useEffect, useState } from "react";
import type { AppProps } from 'next/app'
import 'antd/dist/reset.css'
import '../styles/vars.css'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Hydrated>
      <Component {...pageProps} />
    </Hydrated>
  )
}

const Hydrated = ({ children }: { children?: any }) => {
  const [hydration, setHydration] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHydration(true);
    }
  }, []);
  return hydration ? children : null;
};

export default MyApp
