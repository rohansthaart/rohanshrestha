import { extendTheme } from '@chakra-ui/react'

const colors = {
  paper: '#f3f1ea',
  paperElevated: '#f8f7f2',
  surface: '#ebe6dc',
  surfaceStrong: '#dfd8cb',
  ink: '#17191c',
  muted: '#5d635f',
  line: '#c8c0b0',
  accent: '#2f6f68',
  accentMuted: '#d4e3de',
  accentStrong: '#1f524d'
}

const shadows = {
  card: '0 10px 30px rgba(23, 25, 28, 0.05)',
  lift: '0 16px 40px rgba(23, 25, 28, 0.08)',
  focus: '0 0 0 3px rgba(47, 111, 104, 0.18)'
}

const textStyles = {
  eyebrow: {
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '0.16em',
    fontWeight: '700'
  },
  micro: {
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    fontFamily: 'mono'
  }
}

const styles = {
  global: {
    'html, body': {
      background: colors.paper,
      color: colors.ink
    },
    body: {
      minHeight: '100vh',
      lineHeight: 1.65,
      backgroundImage:
        'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 30%), radial-gradient(circle at top left, rgba(47, 111, 104, 0.08), transparent 28%)'
    },
    a: {
      transition: 'color 160ms cubic-bezier(0.23, 1, 0.32, 1)'
    },
    '*:focus-visible': {
      outline: 'none',
      boxShadow: shadows.focus
    },
    '::selection': {
      background: colors.accent,
      color: colors.paperElevated
    }
  }
}

const components = {
  Container: {
    baseStyle: {
      maxW: '1160px',
      px: { base: 5, md: 8 }
    }
  },
  Heading: {
    baseStyle: {
      color: colors.ink,
      fontWeight: '700',
      letterSpacing: '-0.04em'
    },
    variants: {
      'page-title': {
        fontSize: { base: '4xl', md: '6xl' },
        lineHeight: 0.96
      },
      'section-title': {
        fontSize: { base: '2xl', md: '4xl' },
        lineHeight: 1,
        mb: 4
      }
    }
  },
  Text: {
    baseStyle: {
      color: colors.ink
    }
  },
  Link: {
    baseStyle: {
      color: colors.ink,
      textUnderlineOffset: '3px',
      _hover: {
        color: colors.accentStrong,
        textDecoration: 'none'
      }
    }
  },
  Button: {
    baseStyle: {
      borderRadius: '999px',
      fontWeight: '600',
      transition:
        'transform 160ms cubic-bezier(0.23, 1, 0.32, 1), background-color 160ms cubic-bezier(0.23, 1, 0.32, 1), border-color 160ms cubic-bezier(0.23, 1, 0.32, 1), color 160ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 160ms cubic-bezier(0.23, 1, 0.32, 1)',
      _active: {
        transform: 'scale(0.97)'
      }
    },
    variants: {
      subtle: {
        bg: colors.accent,
        color: colors.paperElevated,
        _hover: {
          bg: colors.accentStrong,
          transform: 'translateY(-1px)'
        }
      },
      outline: {
        borderWidth: '1px',
        borderColor: colors.line,
        color: colors.ink,
        bg: 'transparent',
        _hover: {
          borderColor: colors.accent,
          color: colors.accentStrong,
          bg: 'rgba(47, 111, 104, 0.05)'
        }
      },
      ghost: {
        color: colors.ink,
        _hover: {
          bg: 'rgba(23, 25, 28, 0.05)'
        }
      }
    }
  },
  Badge: {
    baseStyle: {
      borderRadius: 'full',
      px: 3,
      py: 1,
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  },
  Divider: {
    baseStyle: {
      borderColor: colors.line
    }
  },
  ModalContent: {
    baseStyle: {
      borderRadius: '20px',
      borderWidth: '1px',
      borderColor: colors.line,
      background: colors.paperElevated,
      boxShadow: shadows.lift
    }
  },
  Tabs: {
    variants: {
      line: {
        tab: {
          px: 0,
          mr: 6,
          pb: 3,
          color: colors.muted,
          borderBottomWidth: '1px',
          borderColor: 'transparent',
          _selected: {
            color: colors.ink,
            borderColor: colors.accent
          }
        }
      }
    }
  }
}

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  colors,
  shadows,
  textStyles,
  styles,
  components,
  fonts: {
    heading: 'var(--font-space-grotesk), sans-serif',
    body: 'var(--font-manrope), sans-serif',
    mono: 'var(--font-ibm-plex-mono), monospace'
  },
  radii: {
    card: '16px'
  }
})

export default theme
