import { Container, ListItem, Stack } from "@mui/material"
import React, { useEffect } from "react" 
import { Navbar } from "../components/Navbar"
export const Missions: React.FC = () => {


    useEffect(()=>{
        document.title = "MISSIONS | VRT"
        document
    }, [])
    
    return (

       <Container maxWidth={false} 
            sx={{
                // backgroundImage: "url('../../public/image5.jpeg')",
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