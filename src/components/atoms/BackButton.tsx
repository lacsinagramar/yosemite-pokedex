import React, { FC } from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { FaAngleLeft } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'

interface IBackButton {
  title: string
}

const BackButton: FC<IBackButton> = ({ title }) => {
  const history = useHistory()

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        onClick={() => history.goBack()}
        cursor="pointer"
        maxW="70px"
        p={2}
      >
        <FaAngleLeft color="gray.400" />
        <Heading fontWeight={600} fontSize="18px" ml={2}>
          {title}
        </Heading>
      </Box>
    </Box>
  )
}

export default BackButton
