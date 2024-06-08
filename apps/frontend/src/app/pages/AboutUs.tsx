import { Container, ListItem, Stack } from "@mui/material"
import React, { useEffect } from "react" 
import { Navbar } from "../components/Navbar"
export const AboutUs: React.FC = () => {

    useEffect(()=>{
        document.title = "ABOUT | VRT"
        document
    }, [])
    
    return (

        <Container maxWidth={false} 
            sx={{
                // backgroundImage: "url('../../public/falconLiftoff.jpeg')",
                backgroundColor: "black",
                height: "100%",
                width: "100%"
                
            }}
        >
                <Stack>
                        <Navbar/>  
                </Stack>
        </Container>

    )
}