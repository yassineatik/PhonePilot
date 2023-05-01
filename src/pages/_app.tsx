import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import "../styles/globals.scss";
import { ToastContainer, toast } from 'react-toastify';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';


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
  const Router = useRouter();
  return (
    <AnimatePresence
    // exitBeforeEnter
    >

      <motion.div
        key={Router.route}
        initial="initialState"
        animate="animateState"
        exit="exiteState"
        transition={{
          duration: 0.9
        }}
        variants={{
          initialState: {
            opacity: 0,
          },
          animateState: {
            opacity: 1,
          },
          exitState: {

          }
        }
        }
      >
        <Component {...pageProps} />
        <ToastContainer autoClose={3000}
          toastClassName="ToastContainer"
          pauseOnHover={false}
          theme='dark'
        />
      </motion.div>
    </AnimatePresence>

  )
}
