import React, { ComponentProps, FC } from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'

interface IButton {
  bgColor: string
  disabled?: boolean
  hoverBgColor: string
  onClick?: () => void
}

const Button: FC<IButton & ComponentProps<typeof ChakraButton>> = ({
  bgColor,
  children,
  disabled,
  hoverBgColor,
  onClick,
  ...rest
}) => {
  return (
    <ChakraButton
      disabled={disabled}
      bgColor={bgColor}
      color="white"
      textTransform="uppercase"
      _hover={{
        backgroundColor: hoverBgColor,
      }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </ChakraButton>
  )
}

export default Button
