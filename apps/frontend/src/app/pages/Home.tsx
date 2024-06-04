import React, { useEffect } from "react" 
import { Navbar } from "../components/Navbar"
import { Container, ListItem, Stack} from "@mui/material"
import {motion} from "framer-motion"
export const HomePage: React.FC = () => {

    useEffect(()=>{
        document.title = "ABOUT | VRT"
        document
    }, [])
    
    return (

       <Container maxWidth={false} 
            sx={{
                backgroundImage: "url('../../public/falconLiftoff.jpeg')",
                backgroundSize: "1920px",
                height: "100vh"
            }}
        >
                <Stack>
                        <ListItem> <Navbar/> </ListItem> 
                        <ListItem> Updates 1 </ListItem>
                </Stack>
        </Container>

    )
}