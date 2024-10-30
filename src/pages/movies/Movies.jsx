import { Container, Heading } from "@chakra-ui/react"
import React from "react"

const Movies = () => {
    return(
        <Container maxW={"container.xl"}>
          <Heading as="h2" fontSize={"md"} textTransform={"uppercase"}>
            Discover Movies
          </Heading>
        </Container>  
    )
}

export default Movies