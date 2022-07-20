import { Image, HStack, Text, Flex } from '@chakra-ui/react'
import { TriangleDownIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const Cards = ({ info }) => {

    return(
        <Link to={`/character/${info?.id}`}>
            <HStack color="rgba(255, 255, 255, 0.92)" transition="ease-in-out" _hover={{ boxShadow: "0px 0px 51px -7px rgba(0,0,0,0.50)" }} rounded='md' bg='rgba(0, 0, 0, 0.64)' m="15px" minWidth="275px" maxWidth="600px">
                <Image rounded='md' src={info?.image} alt={info?.name} w="150px" />
                <Flex alignItems="start" flexDirection="column" px="20px">
                <HStack>
                    <Text as="b">Gender:</Text>
                    <Text>{info?.gender}</Text>
                </HStack>
                <HStack>
                    <Text as="b">Species:</Text>
                    <Text>{info?.species}</Text>
                </HStack>
                <HStack>
                    <TriangleDownIcon transform="rotate(-90deg)" color={info?.status === "Alive" ? 'green.400' : 'red.400'} />
                    <Text as="b">Status:</Text>
                    <Text>{info?.status}</Text>
                </HStack>
                <HStack>
                    <Text as="b">Location:</Text>
                    <Text>{info?.location?.name}</Text>
                </HStack>     
                </Flex>
            </HStack>
        </Link>
    )
}

export { Cards }