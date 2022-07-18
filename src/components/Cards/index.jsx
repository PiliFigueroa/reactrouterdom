import { Image, HStack, Text, Button, VStack } from '@chakra-ui/react'

const Cards = ({ info }) => {

    return(
        <HStack boxShadow='lg' rounded='md' bg='white' m="15px" minWidth="275px" maxWidth="600px">
            <Image src={info?.image} alt={info?.name} w="150px" />
            <VStack spacing={0}>
                <Text>Gender: {info?.gender}</Text>
                <Text>Species: {info?.species}</Text>
                <Text>Status: {info?.status}</Text>
                <Text>Location: {info?.location?.name}</Text>
                <Button colorScheme='teal' size='xs'>
                    Ver Detalle
                </Button>
            </VStack>
        </HStack>
    )
}

export { Cards }