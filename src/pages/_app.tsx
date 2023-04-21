import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import "../styles/globals.scss"

// function Layout({ children }: any) {
//   const [animationFinished, setAnimationFinished] = useState(false);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setAnimationFinished(true);
//     }, 1000);

//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <div className={`page ${animationFinished ? "animation-finished" : ""}`}>
//       {!animationFinished && (
//         <div className="logo logo-animation">
//           <Image src="/logo.svg" width={800} height={500} alt='PhonePilot' />
//         </div>
//       )}
//       {children}
//     </div>
//   );
// }

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}
