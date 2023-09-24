import "../styles/globals.css";
import { RecoilRoot } from "recoil";

function myApp( {Component, pageProps} ) { 
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default myApp;