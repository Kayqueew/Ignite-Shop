import Image from 'next/image'
import logoShop from '../../assets/LogoShop.svg'
import iconShop from '../../assets/IconShop.svg'
import Link from 'next/link'
import { CardItemButton, HeaderContainer } from './styles'
import * as Dialog from '@radix-ui/react-dialog' // para importar tudo
import CardItem from '../CardItem'
import { useShoppingCart } from 'use-shopping-cart'

export default function Header1() {
  const { cartCount } = useShoppingCart()

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoShop} alt="" />
      </Link>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <CardItemButton>
            <Image src={iconShop} alt="" />
            <div>{cartCount !== 0 ? <span>{cartCount}</span> : ''}</div>
          </CardItemButton>
        </Dialog.Trigger>
        <CardItem />
      </Dialog.Root>
    </HeaderContainer>
  )
}
