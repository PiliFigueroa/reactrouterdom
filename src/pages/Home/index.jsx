import { Box, Heading, Image, Text, VStack } from '@chakra-ui/react'
import rickAndMorty from '../../assets/rickAndMorty.png'

const Home = () => {
    return(
        <Box display="flex" alignItems="center" height="80vh">
            <Image src={rickAndMorty} w="300px" alt="Rick and Morty logo"></Image>
            <VStack w="500px">
                <Heading fontSize="3em">
                <Text color="green.500" as="span">All the information</Text> about your favorite series in <Text color="green.500" as="span">one place</Text>
                </Heading>
            </VStack>
        </Box>
    )
}

export { Home }