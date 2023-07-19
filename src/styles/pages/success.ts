import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto',

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '1rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    bottom: 0,
    position: 'fixed',
    paddingBottom: 80,

    '&:hover': {
      color: '$green300',
    },
  },

  '@media (max-width: 425px)': {
    a: {
      paddingBottom: 30,
    },
  },
})

export const ProductsContainer = styled('div', {
  display: 'flex',
  marginBottom: '2rem',

  ':not(:first-child)': {
    marginLeft: -40,
    zIndex: 1,
  },
})

export const ImageContainer = styled('main', {
  width: '100%',
  maxWidth: 140,
  height: 140,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 999999,
  padding: '0.25rem 0.5rem',
  marginTop: '2rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  boxShadow: '0px 0px 60px rgba(0, 0, 0, 1.8)',

  img: {
    objectFit: 'cover',
  },
})
