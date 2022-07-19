import { Heading, VStack, Alert, AlertIcon, AlertTitle, Spinner, List, ListIcon, ListItem } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { useFetch } from '../../hooks/useFetch'

const Locations = () => {

    const { data, isLoading, error } = useFetch()

    return(
        <VStack>
            <Heading>Locations</Heading>
            {isLoading && <Spinner />}
            {data.results && 
                <List>
                    {data.results.map(location => <List key={location.id}>
                        <ListIcon color='green.500' as={StarIcon} />
                        <ListItem>{location.name}</ListItem>
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

export { Locations }