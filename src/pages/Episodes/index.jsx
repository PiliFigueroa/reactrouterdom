import { Heading, VStack, Alert, AlertIcon, Spinner, List, ListIcon, ListItem, HStack } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { useFetch } from '../../hooks/useFetch'
import { ButtonBar } from '../../components/ButtonBar'

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
            <ButtonBar page={page} setPage={setPage} data={data} />
        </VStack>
    )
}

export { Episodes }