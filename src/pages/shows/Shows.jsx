import { Container, Heading } from "@chakra-ui/react"
import React from "react"

const Shows = () => {
    return(
        <Container maxW={"container.xl"}>
        <Heading as="h2" fontSize={"md"} textTransform={"uppercase"}>
          TV Shows
        </Heading>
      </Container>  
    )
}

export default Shows