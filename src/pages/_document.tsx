import { Head, Html, Main, NextScript } from 'next/document'
import { getCssText } from '../styles'

export default function Document() {
  return (
    <Html>
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />{' '}
        {/* para o css carregar no lado do servidor  */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
