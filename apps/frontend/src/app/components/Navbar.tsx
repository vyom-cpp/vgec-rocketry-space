import * as React from 'react';
import { Button, Grid } from '@mui/material';
import { theme } from '../theme';
import { To, useNavigate } from 'react-router-dom';
import {Link} from '@mui/joy';
import {motion} from "framer-motion"

export const Navbar: React.FC = () => {
    let underline = "none"
    // const pages = ['ABOUT', 'BLOG', 'MISSIONS', 'SUPPORT US', 'SPONSORS'];
    const pages = [
        {
            name:"ABOUT",
            route:'/about'
        },
        {
            name:"BLOG",
            route:'/blog'
        },
        {
            name:"MISSIONS",
            route:'/missions'
        },
        {
            name:"SUPPORT US",
            route:'/support'
        },
    ]
    const handleUnderline = (page: String) =>{
        if(document.location.pathname.toString().includes(page.toString().toLocaleLowerCase().slice(0,4)) )
            return 'underline'
        else 
            return 'none'
    }

    let navigate = useNavigate();
    const handleClick = (to: To) =>{
        console.log(navigate);
        navigate(to);
    }

    console.log(underline)
        
    return (
        <motion.nav
            initial={{ y: '25%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >   
            <Grid container direction="row" rowSpacing={1} alignContent="flex-end" gridArea={100}>
                    {pages.map((page, key)=> (
                        <Grid 
                            item 
                            alignContent="flex-start"
                            justifyContent="center"
                            xs="auto"    
                            margin={1}
                            borderColor="black"
                            key={key}
                            >
                            <Button
                                onClick={() => handleClick(page.route)}
                            >
                                <Link
                                    fontSize={18}
                                    fontFamily={theme.typography.fontFamily}
                                    fontWeight={500}
                                    underline="hover" 
                                    // onClick={handleClick(page.route)}
                                    sx={{
                                        color: "white",
                                        textDecoration: handleUnderline(page.name),
                                        textDecorationThickness: "2px",
                                        textDecorationStyle: "solid",
                                        textUnderlineOffset: "5px"
                                    }}
                                    >
                                    {page.name}
                                </Link>
                            </Button>
                        </Grid>
                    ))}
            </Grid>
        </motion.nav>

    );
}
