import { Box, Container, ListItem, Stack } from "@mui/material"
import React, { useEffect } from "react" 
import { Navbar } from "../components/Navbar"
export const SupportUs: React.FC = () => {

    useEffect(() => {
        document.title = "SUPPORT US | VRT"
        document
      }, [])
    
    return (
        <Container maxWidth={false} 
            sx={{
                backgroundImage: "url('../../public/image3.jpeg')",
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