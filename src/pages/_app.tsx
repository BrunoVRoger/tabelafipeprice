import type { AppProps } from 'next/app'
import { ConsultPriceProvider } from '../Context/ConsultPrice'
import GlobalStyle from '../styles/GlobalStyle'
// 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConsultPriceProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ConsultPriceProvider>
  )
}

export default MyApp
