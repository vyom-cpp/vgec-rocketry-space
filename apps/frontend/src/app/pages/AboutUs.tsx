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
                backgroundImage: "url('../../public/image2.jpeg')",
                backgroundColor: "gray",
                height: "100vh"
            }}
        >
                <Stack>
                        <Navbar/>  
                </Stack>
        </Container>

    )
}