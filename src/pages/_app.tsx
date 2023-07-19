/* eslint-disable @next/next/no-img-element */
import { globalStyles } from '../styles/global'
import type { AppProps } from 'next/app'

import { Container } from '../styles/pages/app'
import { CartProvider } from 'use-shopping-cart'
import Header from '../components/Header'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      stripe={process.env.STRIPE_PUBLIC_KEY as string}
      cartMode="checkout-session"
      currency="BRL"
      shouldPersist
    >
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
