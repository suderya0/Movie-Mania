import { Box, Container, Flex, Heading, Image, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import {fetchDetails, imagePath, imagePathOrigin} from "../services/api"
import { CalendarIcon } from "@chakra-ui/icons";

const DetailsPage = () => {
const router = useParams();
const {type, id} = router;

const [details, setDetails] = useState({});
const [loading, setloading] = useState(true)

useEffect(() => {
    fetchDetails(type, id)
     .then((res) => {
        setDetails(res)
    }).catch((err) =>{
        console.log(err, "err")
    }).finally(()=>{
      setloading(false)
    })
}, [type, id]);

if(loading){
    return(
        <Flex justify={"center"}>
          <Spinner size={"xl"} color="red"></Spinner>
        </Flex>
    )
}

    const title = details?.title || details?.name;

    const releaseDate = type ==="tv" ? details?.first_air_date : details?.release_date;

    return (
        <Box>
            <Box 
            background={`linear-gradient(rgba(0,0,0,.88), rgba(0,0,0,.88)), url(${imagePathOrigin}/${details?.backdrop_path})`}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            backgroundPosition={"center"}
            w={"%100"}
            h={{base: "auto", md: "500px"}}
            py={"2"}
            zIndex={"-1"}
            display={"flex"}
            alignItems={"center"}
            
            >
                <Container maxW={"container.xl"}>
                    <Flex alignItems={"center"} gap = "10" flexDirection={{base: "column", md:"row"}}>
                        <Image height={"450px"} borderRadius={"sm"} src={`${imagePath}/${details?.poster_path}`}/>
                        <Box>
                            <Heading fontSize={"3xl"}>
                                {title}
                                {" "}
                                <Text as = "span" fontWeigt = {"normal"} color = {"gray.400"}>
                                {new Date(releaseDate).getFullYear()}
                                </Text>
                            </Heading>
                            
                            <Flex alignItems={"center"} gap={"4"} mt = {1} mb = {5}>
                                <Flex alignItems={"center"}>
                                    <CalendarIcon mr={2} color={"gray.400"} />
                                        <Text fontSize={"sm"}>
                                            {new Date(releaseDate).toLocaleDateString("en-US")} (US)
                                        </Text> 

                                </Flex>

                            </Flex>
                        </Box>
                    </Flex>

                </Container>
            </Box>
        </Box>
    )

}

export default DetailsPage