import { Heading, Flex, VStack, Alert, AlertIcon, Spinner, Button, HStack, Spacer } from '@chakra-ui/react'
import { useFetch } from '../../hooks/useFetch'
import { Cards } from '../../components/Cards'

const Characters = () => {

    const { data, isLoading, error, page, setPage } = useFetch()

    return(
        <VStack>
            <Heading m="20px">Characters</Heading>
            {isLoading && <Spinner />}
            {data.results && 
                <Flex wrap="wrap" justifyContent="center">
                   {data.results.map(character => <Cards key={character.id} info={character} />)}
                </Flex>
            }
            {error && <Alert>
                    <AlertIcon  />
                    An error ocurred!
                </Alert>
            }
            <Spacer />
            <HStack>
                <Button colorScheme='green' isDisabled={page === 1} onClick={() => setPage(page - 1)}>Prev</Button>
                <Button colorScheme='green' isDisabled={page === data?.info?.pages} onClick={() => setPage(page + 1)}>Next</Button>
            </HStack>
        </VStack>
    )
}

export { Characters }