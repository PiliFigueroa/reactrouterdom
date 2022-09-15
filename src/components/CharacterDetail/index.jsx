import { HStack, VStack, Image, Heading, Text, Center } from "@chakra-ui/react"
import { useFetch } from "../../hooks/useFetch"

const CharacterDetail = () => {

    const { data, isLoading } = useFetch()

    return(
        !isLoading && <Center mb="40px">
            <HStack bg="#242424" color="#fff" padding={10} borderRadius={5} mt={10}>
                <Image src={data?.image} borderRadius={5} />
                <VStack align="left" padding={15}>
                    <Heading mb={5}>{data?.name}</Heading>
                    <HStack>
                        <Text as="b">Created:</Text>
                        <Text>{data?.created}</Text>
                    </HStack>
                    <HStack>
                        <Text as="b">Status:</Text>
                        <Text>{data?.status}</Text>
                    </HStack>
                    <HStack>
                        <Text as="b">Location:</Text>
                        <Text>{data?.location?.name}</Text>
                    </HStack>
                    <HStack>
                        <Text as="b">Gender:</Text>
                        <Text>{data?.gender}</Text>
                    </HStack>
                    <HStack>
                        <Text as="b">Species:</Text>
                        <Text>{data?.species}</Text>
                    </HStack>
                    <HStack>
                        <Text as="b">Appearences:</Text>
                        <Text>{data?.episode?.length} episodes</Text>
                    </HStack>
                </VStack>
            </HStack>
        </Center>
    )
}

export { CharacterDetail }