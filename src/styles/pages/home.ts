import Image from 'next/image'
import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 1280,
  margin: '0 auto',
})

export const Product = styled('div', {
  width: 100,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '1.5rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgb(0, 0, 0, 0.6)',

    transform: 'translatey(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
      color: '$gray100',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },

  '@media (max-width: 1300px)': {
    footer: {
      padding: '1rem',
      strong: {
        fontSize: 16,
        color: '$gray100',
      },

      span: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '$green300',
      },
    },
  },

  '@media (max-width: 1050px)': {
    footer: {
      strong: {
        fontSize: 14,
        color: '$gray100',
      },

      span: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '$green300',
      },
    },
  },

  '@media (max-width: 768px)': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },

  '@media (max-width: 500px)': {
    footer: {
      padding: '1.5rem',
      strong: {
        fontSize: 17,
        color: '$gray100',
      },

      span: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '$green300',
      },
    },
  },

  '@media (max-width: 425px)': {
    footer: {
      padding: '1rem',
      strong: {
        fontSize: 15,
        color: '$gray100',
      },

      span: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '$green300',
      },
    },
  },
})

export const ResponsiveImage = styled(Image, {
  variants: {
    responsive: {
      true: {
        '@media (max-width: 1200px)': {
          maxWidth: '400px',
          height: '360px',
          objectFit: 'cover',
        },
        '@media (max-width: 670px)': {
          maxWidth: '350px',
          height: '310px',
          objectFit: 'cover',
        },
        '@media (max-width: 500px)': {
          maxWidth: '350px',
          height: '320px',
          objectFit: 'cover',
        },
      },
    },
  },
})

export const ButtonCardLeft = styled('button', {
  position: 'absolute',
  zIndex: 1,
  height: '100%',
  display: 'flex',
  width: '6.5rem',
  alignItems: 'center',
  background:
    'linear-gradient(90deg,  rgba(18, 18, 20, 0.75) 0%, rgba(18, 18, 20, 0) 100%)',
  border: 'none',
  cursor: 'pointer',
  '&:disabled': {
    display: 'none',
  },

  svg: {
    marginTop: -100,
    marginLeft: '1rem',
    cursor: 'pointer',
    color: '$gray300',
    '&:hover': {
      filter: 'brightness(0.7)',
    },
  },

  '@media (max-width: 850px)': {
    width: '4rem',
  },

  '@media (max-width: 425px)': {
    width: '3rem',
  },
})

export const ButtonCardRight = styled('button', {
  position: 'absolute',
  zIndex: 1,
  right: 0,
  height: '100%',
  display: 'flex',
  width: '6.5rem',
  alignItems: 'center',
  background:
    'linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)',
  border: 'none',
  cursor: 'pointer',
  '&:disabled': {
    display: 'none',
  },

  svg: {
    marginTop: -100,
    marginLeft: '1rem',
    cursor: 'pointer',
    '&:hover': {
      filter: 'brightness(0.7)',
    },
  },

  '@media (max-width: 850px)': {
    width: '4rem',
  },
  '@media (max-width: 425px)': {
    width: '3rem',

    svg: {
      color: '$green300',
    },
  },
})
