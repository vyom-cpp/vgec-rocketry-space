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
                // backgroundImage: "url('../../public/falconLiftoff.jpeg')",
                backgroundColor: "black",
                backgroundSize: "1890px",
                height: "100vh",
                width: '100%'
            }}
        >
                <Stack>
                        <Navbar/> 
                </Stack>
        </Container>

    )
}