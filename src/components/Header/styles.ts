import { styled } from '../../styles'

export const HeaderContainer = styled('header', {
  width: '100%',
  maxWidth: 1280,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1.5rem 0 4rem 0',

  '@media (max-width: 425px)': {
    img: {
      width: '80%',
    },
  },
})

export const CardItemButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: 55,
  height: 50,
  cursor: 'pointer',

  background: '$gray800',
  border: 0,
  borderRadius: 6,

  span: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: '-2rem',
    marginRight: '-2.5rem',

    width: '1.5rem',
    height: '1.5rem',
    borderRadius: 9999,
    textAlign: 'center',
    fontSize: '0.8rem',
    padding: '0.2rem',
    color: '$white',
    background: '$green300',
  },

  '@media (max-width: 425px)': {
    span: {
      position: 'absolute',
      top: '3.5rem',
      right: '3.5rem',
      width: '1.5rem',
      height: '1.5rem',
      fontSize: '0.9rem',
    },
  },
})
