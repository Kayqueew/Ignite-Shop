import * as Dialog from '@radix-ui/react-dialog' // para importar tudo
import {
  Card,
  CardContainer,
  CardFooter,
  CloseButton,
  Content,
  Overlay,
  EmptyCard,
  Section,
} from './styles'
import shopppingCard from '../../assets/empty-cart.png'
import close from '../../assets/x.svg'
import Image from 'next/image'
import { useShoppingCart } from 'use-shopping-cart'
import axios from 'axios'
import { useState } from 'react'

interface Data {
  id: string
  name: string
  image: string
  formattedPrice: string
  quantity: number
  priceId: string
}

export default function CardItem() {
  const { cartCount, cartDetails, formattedTotalPrice } = useShoppingCart()
  const [isCheckoutSession, setIsCheckoutSession] = useState(false)
  const { removeItem } = useShoppingCart()
  let Data: Data[] = []

  async function handleBuyProduct() {
    try {
      setIsCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        // como o backend e o frontend estao rodando no mesmo endereço , basta colocar o caminho que eles vao se conectar
        /* priceId: product.defaultPriceId */
        Data,
      }) // para criar uma checkoutSesseon melhor jeito é usar o post

      const { checkoutUrl } = response.data // checkoutUrl sendo retornado da pasta api/checkout
      // router.push('/checkout') // caso seja uma rota interna era assim
      window.location.href = checkoutUrl // como é uma rota externa, pra mandar o usuario é assim
    } catch (error) {
      // conectar com uma ferramenta de observabilidade (datadog / Sentry)
      setIsCheckoutSession(false)
      alert('falha ao redirecionar ao checkout!')
    }
  }

  if (cartDetails !== undefined) {
    Data = Object.entries(cartDetails).map(([key, value]) => {
      return {
        id: key,
        name: value.name,
        image: value.image as string,
        formattedPrice: value.formattedPrice,
        quantity: value.quantity,
        priceId: value.price_id,
      }
    })
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <Image src={close} alt="" />
        </CloseButton>

        {cartCount !== 0 ? (
          <CardContainer>
            <Section>
              {Data.map((item) => {
                return (
                  <Card key={item.id}>
                    <div>
                      <Image src={item.image} width={94} height={94} alt="" />
                    </div>

                    <div>
                      <h1>{item.name}</h1>
                      <p>{item.formattedPrice}</p>
                      {item.quantity === 1 ? (
                        <p>{item.quantity} item</p>
                      ) : (
                        <p>{item.quantity} itens</p>
                      )}

                      <button onClick={() => removeItem(item.id)}>
                        Remover
                      </button>
                    </div>
                  </Card>
                )
              })}
            </Section>

            <CardFooter>
              <div>
                <h1>Quantidade</h1>
                {cartCount === 1 ? (
                  <h1>{cartCount} item</h1>
                ) : (
                  <h1>{cartCount} itens</h1>
                )}
              </div>

              <div>
                <p>Valor total</p>
                <p>{formattedTotalPrice}</p>
              </div>

              <button disabled={isCheckoutSession} onClick={handleBuyProduct}>
                Finalizar compra
              </button>
            </CardFooter>
          </CardContainer>
        ) : (
          <EmptyCard>
            <Image src={shopppingCard} width={200} height={200} alt="" />
            <h1>Nada no seu carrinho ainda.</h1>
            <p>
              Descubra nossos produtos incríveis e adicione-os ao seu carrinho!
            </p>
          </EmptyCard>
        )}
      </Content>
    </Dialog.Portal>
  )
}
