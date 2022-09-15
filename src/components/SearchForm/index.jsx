import {
    FormControl,
    FormLabel,
    Input,
    RadioGroup,
    Radio,
    HStack,
    Button
} from '@chakra-ui/react'
import { useState } from 'react'

const SearchForm = ({ setFilter }) => {

    const [params, setParams] = useState({})

    const handleChange = (e) => {
        setParams({
            ...params,
            [e.target.name]: e.target.value
        })
    }

    const handleReset = () => setFilter({})

    return(
        <HStack>
                <FormControl>
                    <FormLabel>Keywords</FormLabel>
                    <Input type='text' name="name" onChange={handleChange} />
                </FormControl>
                <FormControl as='fieldset'>
                    <FormLabel as='legend'>Status</FormLabel>
                    <RadioGroup>
                        <HStack spacing='24px'>
                            <Radio value='Alive' name="status" onChange={handleChange}>Alive</Radio>
                            <Radio value='Dead' name="status" onChange={handleChange}>Dead</Radio>
                            <Radio value='Unknown' name="status" onChange={handleChange}>Unknown</Radio>
                        </HStack>
                    </RadioGroup>
                </FormControl>
                <FormControl as='fieldset'>
                    <FormLabel as='legend'>Gender</FormLabel>
                    <RadioGroup>
                        <HStack spacing='24px'>
                            <Radio value='Male' name="gender" onChange={handleChange}>Male</Radio>
                            <Radio value='Female' name="gender" onChange={handleChange}>Female</Radio>
                            <Radio value='Unknown' name="gender" onChange={handleChange}>Unknown</Radio>
                        </HStack>
                    </RadioGroup>
                </FormControl>
                <FormControl as='fieldset'>
                    <Button type="submit" mt="20px" size='sm' mr="10px" colorScheme='green' onClick={(e) => {
                        e.preventDefault()
                        setFilter(params)
                    }}>Search</Button>
                    <Button mt="20px" size='sm' colorScheme='red' onClick={handleReset}>Reset</Button>
                </FormControl>
        </HStack>
    )
}

export { SearchForm }