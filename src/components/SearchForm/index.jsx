import {
    FormControl,
    FormLabel
} from '@chakra-ui/react'

const SearchForm = () => {
    return(
        <FormControl>
            <FormLabel>Keywords</FormLabel>
            <Input type='text' />
        </FormControl>
    )
}

export { SearchForm }