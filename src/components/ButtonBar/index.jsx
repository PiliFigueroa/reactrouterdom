import { Button, HStack, Spacer } from '@chakra-ui/react'

const ButtonBar = ({ page, setPage, data }) => {
    return(
        <>
            <HStack>
                <Button colorScheme='green' isDisabled={page === 1} onClick={() => setPage(page - 1)}>Prev</Button>
                <Button colorScheme='green' isDisabled={page === data?.info?.pages} onClick={() => setPage(page + 1)}>Next</Button>
            </HStack>
            <Spacer /><Spacer /><Spacer /><Spacer /><Spacer /><Spacer />
        </>
    )
}

export { ButtonBar }