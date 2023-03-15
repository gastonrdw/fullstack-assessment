import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import generateStore from '../state/store';

export default function App({ Component, pageProps }: AppProps) {
  const store = generateStore();
  return (
   <Provider store={store}>
    <Component {...pageProps} />
  </Provider>)
}