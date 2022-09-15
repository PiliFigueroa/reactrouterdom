import { Heading, Flex, VStack, Alert, AlertIcon, Spinner, Center } from '@chakra-ui/react'
import { useFetch } from '../../hooks/useFetch'
import { Cards } from '../../components/Cards'
import { ButtonBar } from '../../components/ButtonBar'

const Characters = () => {

    const { data, isLoading, error, page, setPage } = useFetch()

    return(
        <VStack>
            <Heading m="20px">Characters</Heading>
            <Center>
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
            </Center>
            <ButtonBar page={page} setPage={setPage} data={data} />
        
        </VStack>
    )
}

export { Characters }