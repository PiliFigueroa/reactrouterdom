import { Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import rickAndMorty from '../../assets/rickAndMorty.png'

const Home = () => {
    return(
        <>
            <Heading mt="20px">Rick and Morty App</Heading>
            <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
                <Image src={rickAndMorty} w="300px" alt="Rick and Morty logo"></Image>
                <VStack w="500px">
                    <Heading fontSize="28px">
                    <Text color="green.500" as="span">All the information</Text> about your favorite series in <Text color="green.500" as="span">one place</Text>
                    </Heading>
                </VStack>
            </Flex>
        </>
    )
}

export { Home }