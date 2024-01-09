import {AnimatePresence,motion} from "framer-motion";
import {IconButton, useColorMode, useColorModeValue} from '@chakra-ui/react'
import {SunIcon, MoonIcon} from '@chakra-ui/icons'

const ThemeToggleButton = () => {
    const {toggleColorMode} = useColorMode()

    return(
        <AnimatePresence mode='wait' inital={false}>
           <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: 0, opacity: 0, scale: 1 , rotate:0}}
        animate={{ y: 0, opacity: 1, scale: 1, rotate:360 }}
        exit={{ y: 0, opacity: 0, rotate:0 }}
        transition={{ duration: 0.6 }}
      >
        <IconButton
          aria-label="Toggle theme"
          colorScheme={useColorModeValue('purple', 'orange')}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>

        </AnimatePresence>
    )
}

export default ThemeToggleButton