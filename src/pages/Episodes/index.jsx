import { Heading, VStack, Alert, AlertIcon, Spinner, List, ListIcon, ListItem } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { useFetch } from '../../hooks/useFetch'

const Episodes = () => {

    const { data, isLoading, error } = useFetch(
        `https://rickandmortyapi.com/api`
    )

    return(
        <VStack>
            <Heading>Episodes</Heading>
            {isLoading && <Spinner />}
            {data.results && 
                <List>
                    {data.results.map(episode => <List key={episode.id}>
                        <ListIcon color='green.500' as={StarIcon} />
                        <ListItem>{episode.name}</ListItem>
                    </List>)}
                </List>
            }
            {error && <Alert>
                    <AlertIcon  />
                    An error ocurred!
                </Alert>}
        </VStack>
    )
}

export { Episodes }