import {
  ButtonCardLeft,
  ButtonCardRight,
  HomeContainer,
  Product,
  ResponsiveImage,
} from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import { CaretLeft, CaretRight } from 'phosphor-react'

import { stripe } from '../lib/stripe'
import Stripe from 'stripe'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [maxslide, setMaxSlide] = useState(1)

  const [sliderRef, instanceRef] = useKeenSlider({
    mode: 'free-snap',
    slides: {
      perView: 3, // o tando de itens que vai aparecer
      spacing: 48, // pra dar um gap entre as camisas
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
      setMaxSlide(slider.track.details.maxIdx)
    },

    breakpoints: {
      '(max-width: 850px)': {
        slides: {
          perView: 2,
          spacing: 48,
        },
      },
      '(max-width: 500px)': {
        slides: {
          perView: 1,
          spacing: 48,
        },
      },
    },
  })

  return (
    // ref é pra dar acesso para o keenSlider   //className é para a estilização funcionar
    <>
      <Head>
        {' '}
        {/* SEO */}
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        <ButtonCardLeft
          onClick={() => instanceRef.current.prev()}
          disabled={currentSlide === 0}
        >
          <CaretLeft size={70} color="#858f93" />
        </ButtonCardLeft>

        {products.map((product) => {
          return (
            <Link href={`/product/${product.id}`} key={product.id}>
              {/* o link redireciona o usuario para outra pagina sem o carreagamento todo, igual era no react Single Page Applicatio */}

              <Product className="keen-slider__slide">
                <ResponsiveImage
                  src={product.imageUrl}
                  width={500}
                  height={460}
                  responsive
                  alt=""
                />

                <footer>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </footer>
              </Product>
            </Link>
          )
        })}

        <ButtonCardRight
          onClick={() => instanceRef.current.next()}
          disabled={currentSlide === maxslide}
        >
          <CaretRight size={70} color="#858f93" />
        </ButtonCardRight>
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'], // para ter acesso ao preço do produto
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price // para ter acesso ao preço do produto

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2h // para especificar o intervalo de tempo em segundos que o Next.js deve aguardar antes de regenerar esta chamada apenas.
    // pq essa chamada ta estatica

    // GetServerSideProps: para login, cooks, paginas dinamicas que precisa de um id de usuario, alguma informação do usuario logado
    // GetStaticProps: para paginas que vao ser igual para todos os usuarios, paginas estaticas
  }
}
