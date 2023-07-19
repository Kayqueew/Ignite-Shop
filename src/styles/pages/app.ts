import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  padding: '0 2.5rem',

  '@media (max-width: 500px)': {
    padding: '0 1.5rem',
  },
})
