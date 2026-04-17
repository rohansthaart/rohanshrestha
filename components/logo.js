import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'


import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &: hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  return (
    <Link href="/">
        <LogoBox>
          <Text
            color={useColorModeValue('grey.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            Rohan Shrestha

            
          </Text>
       
        </LogoBox>
    </Link>
  )
}

export default Logo
