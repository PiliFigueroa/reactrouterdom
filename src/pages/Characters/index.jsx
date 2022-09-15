import { Heading, Flex, VStack, Alert, AlertIcon, Spinner, Center } from '@chakra-ui/react'
import { useFetch } from '../../hooks/useFetch'
import { Cards } from '../../components/Cards'
import { ButtonBar } from '../../components/ButtonBar'
import { SearchForm } from '../../components/SearchForm'
import { useState } from 'react'

const Characters = () => {

    const [filter, setFilter] = useState({})

    const { data, isLoading, error, page, setPage } = useFetch(filter)

    return(
        <VStack>
            <Heading m="20px">Characters</Heading>
            <SearchForm setFilter={setFilter} />
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