import { styled } from '@/src/styles'
import * as Dialog from '@radix-ui/react-dialog' // para importar tudo

export const Content = styled(Dialog.Content, {
  backgroundColor: '$gray800',
  zIndex: 1,
  color: '$white',
  position: 'fixed',
  top: 0,
  right: 0,
  height: '100vh',

  display: 'flex',
  flexDirection: 'column',
  boxShadow: '10px black',
  width: 480,

  '@media (max-width: 425px)': {
    width: '100%',
  },
})

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  background: 'transparent',
  border: 0,
  top: '1.5rem',
  right: '1.5rem',
  cursor: 'pointer',

  '@media (max-width: 425px)': {
    top: '1rem',
  },
})

export const CardContainer = styled('main', {
  padding: '4.5rem 3rem 0 3rem ',

  '@media (max-width: 425px)': {
    padding: '3.5rem 1.5rem 0 1.5rem ',
  },
})

export const Section = styled('section', {
  maxHeight: 450,
  overflow: 'hidden',
  overflowY: 'scroll',

  '&::-webkit-scrollbar': {
    width: 'thin',
    background: 'transparent',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$green300',
    borderRadius: '1000px',
  },

  '@media (max-height: 700px)': {
    maxHeight: '330px',
  },

  '@media (max-height: 570px)': {
    maxHeight: '260px',
  },
})

export const Card = styled('div', {
  display: 'flex',
  marginBottom: 24,

  'div:first-of-type': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 94,
    marginRight: 20,

    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 6,
  },

  div: {
    h1: {
      fontSize: '$md',
      lineHeight: 1.6,
      color: '$gray300',
    },

    p: {
      fontSize: '$md',
      lineHeight: 1.6,
      color: '$gray100',
    },

    button: {
      border: 0,
      backgroundColor: '$gray800',
      paddingTop: 8,

      fontSize: 16,
      lineHeight: 1.6,
      color: '$green500',
      cursor: 'pointer',

      '&:hover': {
        color: '$green300',
      },
    },
  },
})

export const CardFooter = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',

  width: '100%',
  maxWidth: 384,
  marginTop: 60,
  bottom: 0,
  position: 'fixed',
  paddingBottom: 43,

  'div:first-of-type': {
    display: 'flex',
    justifyContent: 'space-between',

    h1: {
      fontSize: 16,
      lineHeight: 1.6,
      color: '$gray300',
    },
  },

  div: {
    display: 'flex',
    justifyContent: 'space-between',

    'p:first-of-type': {
      fontSize: 19,
      lineHeight: 1.6,
      color: '$gray100',
    },

    p: {
      fontSize: 21,
      lineHeight: 1.4,
      color: '$gray100',
    },
  },

  button: {
    marginTop: 20,
    height: 69,
    background: '$green500',
    cursor: 'pointer',
    border: 0,
    borderRadius: 6,

    fontSize: 18,
    lineHeight: 1.6,
    color: '$white',

    '&:disabled': {
      cursor: 'wait',
    },

    '&:hover': {
      background: '$green300',
    },
  },

  '@media (max-height: 540px)': {
    marginTop: -20,
  },

  '@media (max-width: 420px)': {
    paddingRight: '2.5rem',
  },
})

export const EmptyCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',

  padding: '0 3rem 0 3rem ',
  width: 480,

  img: {
    marginTop: -200,
  },

  h1: {
    fontSize: 23,
    lineHeight: 1.4,
    color: '$white',
    marginTop: 50,
    textTransform: 'uppercase',
  },

  p: {
    fontSize: 17,
    lineHeight: 1.4,
    color: '$gray300',
    textAlign: 'center',

    marginTop: 10,
  },

  '@media (max-width: 425px)': {
    width: '100%',
    padding: '0 1.5rem 0 1.5rem ',

    img: {
      width: 170,
      height: 170,
    },

    h1: {
      fontSize: 20,
    },

    p: {
      fontSize: 15,
    },
  },

  '@media (max-width: 320px)': {
    h1: {
      fontSize: 18,
    },
    p: {
      fontSize: 14,
    },
  },
})
