import { globalCss } from '.' // vindo do index

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  '@media (max-width: 770px)': {
    html: {
      fontSize: '85%',
    },
  },

  '::-webkit-scrollbar': {
    width: 6,
    height: 6,
  },

  '::-webkit-scrollbar-track': {
    background: 'transparent',
    cursor: 'pointer',
  },

  '::-webkit-scrollbar-thumb': {
    borderRadius: 3,
    background: '$gray800',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray900',
    color: '$gray100',
  },

  'body, input, textarea, button': {
    fontFamily: '$roboto',
    fontWeight: 400,
  },
})
