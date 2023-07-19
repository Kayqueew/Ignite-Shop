// rotas que são acessadas no servidor node e nao no backEnd

import { stripe } from '@/src/lib/stripe'
import { NextApiRequest, NextApiResponse } from 'next'
import Success from '../success'

interface Data {
  id: string
  name: string
  image: string
  formattedPrice: string
  quantity: number
  priceId: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // para criar uma checkoutSession, uma ação depois da compra
  const { Data } = req.body // ta pegando o corpo da api na pasta product

  if (req.method !== 'POST') {
    // pro usuario nao acessar essa rota pela url, só como o metodo post
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  if (!Data) {
    return res.status(400).json({ error: 'Price not found.' })
  }

  const lineItems = Data.map((item: Data) => {
    return {
      price: item.priceId,
      quantity: item.quantity,
    }
  })

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}` // ?session_id={CHECKOUT_SESSION_ID} chave pra pegar as informaçoes na pagina seccess, elas vao ser possiveis pegar pelo query na pagina success
  const cancelUrl = `${process.env.NEXT_URL}/` // home

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl, // pra onde redirecionar o usuario depois que ele finalizou a compra
    cancel_url: cancelUrl,

    mode: 'payment', // permite que você aceite cartões de crédito, cartões de débito e métodos de pagamento populares em todo o mundo
    line_items: lineItems,
  })

  // 201 SIGNIFICA QUE ALGO FOI CRIADO PQ EU CRIEI UMA checkoutSession
  return res.status(201).json({
    checkoutUrl: checkoutSession.url, // essa é a url onde o usuario vai finalizar a compra dentro do stripe
  })
}

// todo codigo que roda aqui dentro é ssr, nao precisa se preocupar com dados sensivel, pode fazer acesso ao banco de dados

// getStaticProps da pra fazer chamada sensiveis, mas eles só executa no carregamendo da pagina
// se tiver alguma ação do usuario pelo ssr, algo sensevel que venha atraves de uma ação, click de um botão nao como usar o getStaticProps, só o api Routes
