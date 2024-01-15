import '@/styles/globals.css'
import { WishlistProvider } from '@/components/WishlistContext';


export default function App({ Component, pageProps }) {
  return (
    <WishlistProvider>
      <Component {...pageProps} />
    </WishlistProvider>
  );
}


