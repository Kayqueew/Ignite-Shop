import Image from 'next/image'
import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  alignItems: 'stretch', // vai fazer com que as duas colunas tenha o mesmo tamanho
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto',
  paddingBottom: 30,

  '@media (max-width: 800px)': {
    gridTemplateColumns: '1fr',
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  height: 500,
  maxWidth: 576,
  /* height: 656, */
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  '@media (max-width: 1000px)': {
    width: 350,
  },

  '@media (max-width: 800px)': {
    width: '100%',
    maxWidth: 710,
  },

  '@media (max-width: 600px)': {
    width: '100%',
    minWidth: 450,
  },

  '@media (max-width: 425px)': {
    width: '100%',
    minWidth: 300,
    height: 400,
  },

  '@media (max-width: 320px)': {
    width: '100%',
    minWidth: 280,
    height: 300,
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'wait',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },
  },

  '@media (max-width: 800px)': {
    button: {
      marginTop: '1.5rem',
    },
  },
})

export const ResponsiveImage = styled(Image, {
  variants: {
    responsive: {
      true: {
        '@media (max-width: 1000px)': {
          maxWidth: '440px',
          height: '420px',
        },

        '@media (max-width: 425px)': {
          maxWidth: '380px',
          height: '340px',
        },

        '@media (max-width: 320px)': {
          maxWidth: '290px',
          height: '270px',
        },
      },
    },
  },
})
