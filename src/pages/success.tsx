import Link from 'next/link'
import {
  ImageContainer,
  ProductsContainer,
  SuccessContainer,
} from '../styles/pages/success'
import { GetServerSideProps } from 'next'
import { stripe } from '../lib/stripe'
import Stripe from 'stripe'
import Image from 'next/image'
import Head from 'next/head'
import { useShoppingCart } from 'use-shopping-cart'
import { useEffect } from 'react'
import css from 'styled-jsx/css'

interface SuccessProps {
  customerName: string
  products: {
    name: string
    imageUrl: string[]
  }
}

export default function Success({ customerName, products }: SuccessProps) {
  const { clearCart, cartDetails } = useShoppingCart()
  useEffect(() => {
    if (cartDetails !== undefined && Object.keys(cartDetails).length !== 0) {
      clearCart()
    }
  }, [clearCart, cartDetails])

  return (
    <>
      <Head>
        {' '}
        {/* SEO */}
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />{' '}
        {/* pra pagina nao index essa pagina  */}
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <ProductsContainer>
          {products.imageUrl.map((image, index) => {
            return (
              <ImageContainer key={image} css={{ zIndex: index }}>
                <Image src={image} width={120} height={110} alt="" />
              </ImageContainer>
            )
          })}
        </ProductsContainer>

        <p>
          Uhuul <strong>{customerName}</strong>, sua{' '}
          <strong>{products.name}</strong> já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálago</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // query vindo do checkout pela url da success

  if (!query.session_id) {
    // se nao tiver a session_id vai mandar para page home
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    // assim da pra pegar todos os dados da session, dados do cliente, se foi pago ou nao
    expand: ['line_items', 'line_items.data.price.product'], // esse expand server pra pegar os dados do produto, precisa expandir pra pegar os dados
  })

  const customerName = session.customer_details.name // nome do cliente
  const product = session.line_items.data[0].price?.product as Stripe.Product // dados do produto  //o data[0] é um array pq uma compra pode ter varios produtos, mas como na aplicação só tem um ele vai pegar o primeiro
  const products = session.line_items!.data.map((item) => {
    if (item.price !== null) {
      return item.price.product
    } else {
      return ''
    }
  }) as Stripe.Product[]
  const productsImages = products.map((product) => {
    return product.images[0]
  })

  return {
    props: {
      customerName,
      products: {
        name: product.name, // nome do produto
        imageUrl: productsImages,
      },
    },
  }
}

/* 
  formas de consumir uma api

  Client-side (useEffect)
  getServerSideProps
  getStataicProps    //nao da pra usar no success pq ela depende do usuario 
*/
