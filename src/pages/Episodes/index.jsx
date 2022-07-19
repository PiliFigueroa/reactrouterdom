import { Heading, VStack, Alert, AlertIcon, Spinner, List, ListIcon, ListItem, HStack, Button } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { useFetch } from '../../hooks/useFetch'

const Episodes = () => {

    const { data, isLoading, error, page, setPage } = useFetch()

    return(
        <VStack>
            <Heading>Episodes</Heading>
            {isLoading && <Spinner />}
            {data.results && 
                <List>
                    {data.results.map(episode => <List key={episode.id}>
                        <HStack>                
                            <ListIcon color='green.500' as={StarIcon} />
                            <ListItem>{episode.name}</ListItem>
                        </HStack>
                    </List>)}
                </List>
            }
            {error && <Alert>
                    <AlertIcon  />
                    An error ocurred!
                </Alert>
            }
            <HStack>
                <Button colorScheme='green' isDisabled={page === 1} onClick={() => setPage(page - 1)}>Prev</Button>
                <Button colorScheme='green' isDisabled={page === data?.info?.pages} onClick={() => setPage(page + 1)}>Next</Button>
            </HStack>
        </VStack>
    )
}

export { Episodes }