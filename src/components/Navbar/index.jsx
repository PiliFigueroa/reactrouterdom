import { Center } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
        <Center>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/episodes">Episodes</NavLink>
            <NavLink to="/characters">Characters</NavLink>
            <NavLink to="/locations">Locations</NavLink>
        </Center>
    )
}

export { Navbar }