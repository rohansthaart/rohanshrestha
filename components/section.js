import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const media = window.matchMedia('(prefers-reduced-motion: reduce)')
      setReduced(media.matches)
      const handler = () => setReduced(media.matches)
      media.addEventListener('change', handler)
      return () => media.removeEventListener('change', handler)
    }
  }, [])
  return reduced
}

const Section = ({ children, delay = 0, mb = 6 }) => {
  const prefersReducedMotion = usePrefersReducedMotion()
  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={prefersReducedMotion ? undefined : { duration: 0.55, delay, ease: 'easeOut' }}
      mb={mb}
      style={prefersReducedMotion ? { transition: 'none' } : undefined}
    >
      {children}
    </StyledDiv>
  )
}

export default Section