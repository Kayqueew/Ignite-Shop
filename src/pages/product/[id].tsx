import { stripe } from '@/src/lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
  ResponsiveImage,
} from '@/src/styles/pages/product'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Stripe from 'stripe'

import { useShoppingCart } from 'use-shopping-cart'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    description: string
    defaultPriceId: string
    formattedPrice: string
  }
}

export default function Product({ product }: ProductProps) {
  const { addItem } = useShoppingCart() // aqui ta add os itens no carrinho"

  function addItemToCart() {
    /* if(product.id != product.id) */
    addItem(
      {
        name: product.name,
        description: product.description,
        id: product.id,
        price: product.price,
        currency: 'BRL',
        image: product.imageUrl,
        price_id: product.defaultPriceId,
      },
      /* { count: 1 }, */
    )

    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'item adicionado ao carrinho',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  return (
    <>
      <Head>
        {' '}
        {/* SEO */}
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <ResponsiveImage
            src={product.imageUrl}
            width={520}
            height={480}
            responsive
            alt=""
          />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.formattedPrice}</span>

          <p>{product.description}</p>
          <button onClick={addItemToCart}>Colocar na sacola</button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // quando a pagina for estatica e receber alguma parmentro(id) vai precisar ter isso
  return {
    paths: [], // tudo que for passado aqui vai ser criado estatico // ou vc passa os produtos mais importante ou deixa vazio que o fallback vai criar uma pagina estatica quando entrar
    fallback: `blocking`,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id // pra pegar o id do produto

  const product = await stripe.products.retrieve(productId, {
    // retrieve com o id, para ter acesso a api toda
    expand: ['default_price'], // para ter acesso ao preço do produto, nao tem o data pq nao é uma lista
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        formattedPrice: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id, // id do preço
        price: price.unit_amount,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}

/* const { isFallback } = useRouter()
  precisa passar o true no fallback pra funcionar 
  if (isFallback) {
    return <p>carregando...</p>
  } */
