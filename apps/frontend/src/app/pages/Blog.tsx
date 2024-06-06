import { Container, ListItem, Stack } from "@mui/material"
import React, { useEffect } from "react" 
import { Navbar } from "../components/Navbar"
export const Blog: React.FC = () => {

    useEffect(()=>{
        document.title = "BLOG | VRT"
        document
    }, [])
    
    return (

       <Container maxWidth={false} 
            sx={{
                // backgroundImage: "url('../../public/image6.jpeg')",
                backgroundColor: "black",
                height: "100vh"
            }}
        >
                <Stack>
                         <Navbar/>  
                </Stack>
        </Container>

    )
}