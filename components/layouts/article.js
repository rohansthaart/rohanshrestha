import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../grid-item'

const variants = {
  hidden: { opacity: 0, y: 18 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 12 }
}

const Layout = ({ children, title }) => {
  const pageTitle = title ? `${title} | Rohan Shrestha` : 'Rohan Shrestha | Portfolio'

  return (
    <motion.article
      initial={false}
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
      style={{ position: 'relative' }}
    >
      <>
        <Head>
          <title>{pageTitle}</title>
          <meta name="twitter:title" content={pageTitle} />
          <meta property="og:title" content={pageTitle} />
        </Head>
        {children}
        <GridItemStyle />
      </>
    </motion.article>
  )
}

export default Layout
