import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f4efe6', '#1f2026')(props),
      color: mode('#1d1f24', '#f3f5f7')(props),
      lineHeight: 1.7,
      backgroundImage: mode(
        'radial-gradient(circle at 12% 8%, rgba(136, 204, 202, 0.22), transparent 35%), radial-gradient(circle at 88% 3%, rgba(89, 121, 255, 0.14), transparent 28%)',
        'radial-gradient(circle at 8% 6%, rgba(136, 204, 202, 0.2), transparent 32%), radial-gradient(circle at 88% 2%, rgba(95, 113, 255, 0.18), transparent 30%)'
      )(props),
      backgroundAttachment: 'fixed'
    },
    '::selection': {
      background: mode('#88ccca', '#81b6b4')(props),
      color: '#1d1f24'
    }
  })
}

const components = {
  Heading: {
    variants: {
      'page-title': {
        fontSize: ['2xl', '3xl'],
        fontWeight: 'bold',
        letterSpacing: 'tight',
        lineHeight: 1.2,
        marginBottom: 2
      },
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Text: {
    baseStyle: {
      color: 'inherit'
    }
  },
  Box: {
    baseStyle: {
      borderColor: mode('blackAlpha.200', 'whiteAlpha.300')
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#16697a', '#8fd4d2')(props),
      textUnderlineOffset: 3,
      transition: 'color 0.2s ease, opacity 0.2s ease',
      _hover: {
        opacity: 0.85,
        textDecoration: 'underline'
      }
    })
  },
  Button: {
    baseStyle: {
      fontWeight: 'medium'
    },
    variants: {
      subtle: {
        bg: 'grassTeal',
        color: '#1d1f24',
        _hover: {
          transform: 'translateY(-2px)',
          boxShadow: 'md'
        },
        _active: {
          transform: 'translateY(0)'
        },
        transition: 'all 0.2s ease'
      },
      ghost: props => ({
        borderRadius: 'md',
        _hover: {
          bg: mode('blackAlpha.100', 'whiteAlpha.200')(props)
        }
      })
    }
  },
  Badge: {
    baseStyle: {
      borderRadius: 'md',
      px: 2,
      py: 0.5,
      fontWeight: 'medium'
    }
  },
  Container: {
    baseStyle: {
      px: [4, 6]
    }
  },
  ModalContent: {
    baseStyle: props => ({
      borderRadius: 'xl',
      borderWidth: '1px',
      borderColor: mode('blackAlpha.200', 'whiteAlpha.300')(props),
      boxShadow: mode(
        '0 12px 32px rgba(13, 17, 23, 0.12)',
        '0 18px 42px rgba(0, 0, 0, 0.45)'
      )(props)
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'",
  body: "'M PLUS Rounded 1c'"
}

const colors = {
  grassTeal: '#88ccca'
}

const radii = {
  card: '16px'
}

const shadows = {
  card: '0 8px 26px rgba(17, 24, 39, 0.08)',
  cardDark: '0 10px 28px rgba(0, 0, 0, 0.32)',
  cardHover: '0 14px 34px rgba(17, 24, 39, 0.16)',
  cardHoverDark: '0 16px 36px rgba(0, 0, 0, 0.45)',
  glowTeal: '0 0 0 1px rgba(136, 204, 202, 0.28), 0 16px 36px rgba(17, 24, 39, 0.14)'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
  colors,
  radii,
  shadows
})
export default theme