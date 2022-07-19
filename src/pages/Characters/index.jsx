import { Heading, Center, VStack, Alert, AlertIcon, Spinner } from '@chakra-ui/react'
import { useFetch } from '../../hooks/useFetch'
import { Cards } from '../../components/Cards'

const Characters = () => {

    const { data, isLoading, error } = useFetch()

    return(
        <VStack>
        <Heading>Characters</Heading>
            {isLoading && <Spinner />}
            {data.results && data.results.map(character => <Cards key={character.id} info={character} />)}
            {error && <Alert>
                    <AlertIcon  />
                    An error ocurred!
                </Alert>}
        </VStack>
    )
}

export { Characters }