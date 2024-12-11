import { Box, Container, Button, Stack, Typography, useMediaQuery, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
import Rocket from "/rocket-demo.jpeg";
import { Navbar } from "../components/Navbar";
import { theme } from "../theme";
import { Footer } from "../components/Footer";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
// import { useInView } from "react-intersection-observer";
import LaunchSnap from '/LaunchSnap.jpeg'
import GroupPhoto from '/EventClass.jpg'
import AnantaOnStand1 from '/AnantaOnStand1.jpeg'
import Aflatoon from '/Aflatoon.jpeg'
import UPIQr from '/UPIQr.jpeg'
import axios from 'axios';
interface donorCreds  {
    name: string
    email: string
    amount: string
    customAmount? : string
}

export const SupportUs: React.FC = () => {

    useEffect(() => {
        document.title = "SUPPORT US | VRT";
    }, []);

    const [open, setOpen] = useState(false);
    const [amount, setAmount] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [customAmount, setCustomAmount] = React.useState('');
    const [qrDialogOpen, setQrDialogOpen] = React.useState(false);
    const [donorCreds, setDonorCreds] = React.useState<Partial<donorCreds>>({});

    const handleClickOpen = () => {
        setOpen(true);
    };

    useEffect(() => {
        console.log("donorCreds updated:", donorCreds);
    }, [donorCreds]);

    const sendInfo = async () => {
        console.log("Andar info na ")
        console.log(donorCreds)
        const { name, email, amount, customAmount } = donorCreds
        setDonorCreds({})
        setQrDialogOpen(false)
        // axios.post('https://discord.com/api/webhooks/1290707583195156561/niGX7p0C6VbGgYydzHapxVk9VCVXvHj77MQWbPtEDxb37coIJZ70tY710JSuJ6GYtEkY', {
        axios.post('https://discord.com/api/webhooks/1092854760136245289/HlAT6CkbSIZFT1COaAbkJOWyq_IXrBpneCew68NaPnrxxDjurc8GqDVTpDNFzNM0L9TB', {
            content: `Contribution\nName: ${name}\nEmail: ${email}\nAmount: ${customAmount ? customAmount : amount} \n`,
        })
        console.log(donorCreds)
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        console.log({ amount, name, email });
        handleClose();
    };

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    // Sponsors
    const sponsors = [
        {
            name: "Sponsor 1",
            pic: "/path-to-logo1.png",
            reviews: "Very hardworking boyzzzzzzzzzzz",
        },
        {
            name: "Sponsor 2",
            pic: "/path-to-logo2.png",
            reviews: "Very hardworking boyzzzzzzzzzzz",
        },
        {
            name: "Sponsor 3",
            pic: "/path-to-logo3.png",
            reviews: "Very hardworking boyzzzzzzzzzzz",
        },
        {
            name: "Sponsor 4",
            pic: "/path-to-logo4.png",
            reviews: "Very hardworking boyzzzzzzzzzzz",
        },
        {
            name: "Sponsor 5",
            pic: "/path-to-logo5.png",
            reviews: "Very hardworking boyzzzzzzzzzzz",
        }
    ];


    return (
        <div style={{ overflow: "hidden" }}>
            <Container maxWidth={false}
                disableGutters
                sx={{
                    backgroundImage: {
                        xs: `url('${LaunchSnap}')`,
                        md: `url('${GroupPhoto}')`,
                      },
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "black",
                    paddingLeft: 0 ,
                    paddingRight: 0 ,
                    height: '101vh',
                    minWidth: "100%",
                    zIndex: -2
                }}
            >
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    minWidth: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.57)', // Adjust transparency
                    zIndex: -1, // Above the image but below everything else
                }}
            >
                <Navbar />
                <Box 
                    alignContent='center'
                    height='70%'
                >

                    <Typography
                        sx={{
                            color: "white",
                            // fontFamily: theme.typography.fontFamily,
                            fontFamily: 'Nova Square',
                            fontSize: isSmallScreen ? "50px" : "75px",
                            display: "flex",
                            paddingLeft: isSmallScreen ? '0.3em' : 0,
                            paddingRight: isSmallScreen ? '0.3em': 0,
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                        }}
                        >
                        Help us reach the Sky
                    </Typography>
                    <Typography
                        sx={{
                            color: "white",
                            fontFamily: theme.typography.fontFamily,
                            paddingTop: isSmallScreen ? '20px' : '0', 
                            fontSize: isSmallScreen ? "20px" : "35px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                        }}
                    >
                        Contribute today to empower the next generation.
                    </Typography>
                </Box>
            </Box>
            </Container>
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: "25px",
                    marginBottom: "64px",
                }}
            >
                <React.Fragment>
                    <Button

                        variant="outlined"
                        sx={{
                            width: 'fit-content',
                            fontFamily: theme.typography.fontFamily,
                            marginTop: isSmallScreen ? '50px' : '100px',
                            marginBottom: isSmallScreen ? '-20px' : '-5px',
                            padding: "2px 35px",
                            borderColor: theme.palette.primary.main,
                            color: theme.palette.primary.main,
                            fontSize: isSmallScreen ? '30px' : '40px',
                            '&:hover': {
                                variant: 'contained',
                                backgroundColor: theme.palette.primary.light,
                                color: 'white',
                            },
                        }}
                        onClick={handleClickOpen}
                    >
                        Contribute
                    </Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        fullWidth
                        maxWidth="sm"
                        PaperProps={{
                            component: 'form',
                            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                                event.preventDefault();
                                const formData = new FormData(event.currentTarget);
                                formData.set('amount', amount);
                                const formJson = Object.fromEntries(formData.entries());

                                const { name, email, amount: selectedAmount, customAmount } = formJson;

                                if (!name || !email) {
                                    alert('Please fill in your name and email.');
                                    return;
                                }

                                if (!selectedAmount) {
                                    alert('Please select an amount.');
                                    return;
                                }

                                if (amount === 'other' && (!customAmount || parseFloat(customAmount as string) <= 0)) {
                                    alert('Please enter a valid custom amount greater than 0.');
                                    return;
                                }

                                // console.log("Form Submitted", formJson);
                                setDonorCreds(formJson);
                                setQrDialogOpen(true);
                                handleClose();
                            },
                        }}
                    >
                        <DialogTitle
                            sx={{
                                fontSize: isSmallScreen ? '30px' : '45px',
                                textAlign: 'center',
                                fontFamily: theme.typography.fontFamily,
                            }}
                        >
                            Contribute To Future
                        </DialogTitle>
                        <DialogContent>
                            <Box>
                                <Typography 
                                    variant="h6" 
                                    gutterBottom
                                    fontFamily={theme.typography.fontFamily}
                                >
                                    Choose an Amount
                                </Typography>
                                <Grid container spacing={2}>
                                    {["20", "50", "100", "200", "500", "other"].map((value, index) => (
                                        <Grid item xs={4} key={index}>
                                            <Button
                                                fullWidth
                                                variant='outlined'
                                                sx={{
                                                    padding: "10px",
                                                    fontSize: "16px",
                                                    fontFamily: theme.typography.fontFamily,
                                                    borderColor: 'black',
                                                    color: amount === value ? 'white' : 'black',
                                                    backgroundColor: amount === value ? 'black' : 'transparent',
                                                    '&:hover': {
                                                        backgroundColor: 'black',
                                                        color: 'white',
                                                    },
                                                }}
                                                onClick={() => setAmount(value)}
                                                value={value}
                                            >
                                                {value === "other" ? "Other" : `₹${value}`}
                                            </Button>
                                        </Grid>
                                    ))}
                                </Grid>
                                {amount === 'other' && (
                                    <TextField
                                        fullWidth
                                        required
                                        name='customAmount'
                                        variant="outlined"
                                        id="outlined-number"
                                        margin="normal"
                                        label="Enter Amount"
                                        type="number"
                                    />
                          
                                )}
                                <Typography variant="h6" gutterBottom sx={{ mt: 2 }} fontFamily={theme.typography.fontFamily}>
                                    Personal Information
                                </Typography>
                                <TextField
                                    fullWidth
                                    required
                                    name="name"
                                    variant="outlined"
                                    margin="normal"
                                    label="Name"
                                />
                                <TextField
                                    fullWidth
                                    required
                                    name="email"
                                    variant="outlined"
                                    margin="normal"
                                    label="Email"
                                    type="email"
                                />
                            </Box>
                        </DialogContent>
                        <DialogActions>
                            <Button
                                type="button"
                                variant="outlined"
                                sx={{
                                    borderColor: 'black',
                                    fontSize: isSmallScreen ? '15px' : '20px',
                                    fontFamily: theme.typography.fontFamily,
                                    color: 'black',
                                    '&:hover': {
                                        backgroundColor: 'black',
                                        color: 'white',
                                    },
                                }}
                                onClick={handleClose}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                variant="outlined"
                                sx={{
                                    // borderColor: 'black',
                                    fontFamily: theme.typography.fontFamily,
                                    fontSize: isSmallScreen ? '15px' : '20px',
                                    backgroundColor: theme.palette.primary.main,
                                    color: 'white',
                                    '&:hover': {
                                        // backgroundColor: 'black',
                                        color: theme.palette.primary.main,
                                    },
                                }}
                            >
                                Continue
                            </Button>
                        </DialogActions>
                    </Dialog>

                    {/* QR Dialog */}
                    <Dialog
                        open={qrDialogOpen}
                        onClose={() => setQrDialogOpen(false)}
                        fullWidth
                        maxWidth="xs"
                    >
                        <DialogTitle>Payment QR</DialogTitle>
                        <DialogContent>
                            <Typography
                                variant="subtitle2"
                                align="left"
                                color="error"
                            >
                                *Payment gateway will be added soon, use this QR Code for now
                            </Typography>
                            <Box sx={{ textAlign: "center", objectFit: "contain"}}>
                                <img
                                    src={UPIQr}
                                    alt="UPI"
                                    style={{ 
                                        width: isSmallScreen ? "30vh" : "40vh",
                                        maxHeight: "40vh",
                                        objectFit: "cover" 
                                    }}
                                />
                            </Box>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => setQrDialogOpen(false)} color="primary">
                                Close
                            </Button>
                            <Button onClick={() => sendInfo()} variant="contained" color="primary">
                                Done
                            </Button>
                            
                        </DialogActions>
                    </Dialog>
                </React.Fragment>
            </Container>



            {/* Tab line */}
            {/* <Container
                maxWidth={false}
                sx={{
                    marginTop: "64px",
                    marginBottom: "64px",
                    boxSizing: "border-box",
                    minWidth: 0,
                    position: "relative",
                    width: "100%",
                    textAlign: "center",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        left: "10%",
                        right: "10%",
                        bottom: 0,
                        borderBottom: "1px solid #000",
                        width: "80%",
                        margin: "0 auto"
                    },
                }}
            /> */}


            {/* Our Rockets */}
            <Container
                maxWidth={false}
                sx={{
                    marginTop: isSmallScreen ? "50px" : "100px",
                    marginBottom: "64px",
                    padding: 0,
                    textAlign: "center",
                    width: "100%"
                }}
            >
                <Typography
                    sx={{
                        color: "black",
                        fontFamily: theme.typography.fontFamily,
                        fontSize: isSmallScreen ? "50px" : "80px",
                        marginBottom: "32px"
                    }}
                >
                    Our Rockets
                </Typography>

                <Stack
                    direction={isSmallScreen ? 'column' : 'row'}
                    spacing={isSmallScreen ? 10 : 20}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box sx={{ textAlign: "center", objectFit: "cover"}}>
                        <img
                            src={AnantaOnStand1}
                            alt="Ananta"
                            style={{ 
                                width: isSmallScreen ? "35vh" : "350px",
                                maxHeight: "70vh",
                                objectFit: "cover" 

                            }}                        
                    />
                        <Typography
                            sx={{
                                color: "black",
                                fontFamily: theme.typography.fontFamily,
                                fontSize: isSmallScreen ? "25px" : "30px",
                                marginTop: "8px"
                            }}
                        >
                            Ananta
                            <br />
                            Height: 180m
                        </Typography>
                    </Box>

                    <Box sx={{ textAlign: "center", objectFit: "contain"}}>
                        <img
                            src={Aflatoon}
                            alt="Aflatoon"
                            style={{ 
                                width: isSmallScreen ? "35vh" : "350px",
                                maxHeight: "70vh",
                                objectFit: "cover" 
                            }}
                        />
                        <Typography
                            sx={{
                                color: "black",
                                fontFamily: theme.typography.fontFamily,
                                fontSize: isSmallScreen ? "25px" : "30px",
                                marginTop: "8px"
                            }}
                        >
                            Aflatoon
                            <br />
                            Height: 702m
                        </Typography>
                    </Box>
                </Stack>
            </Container>



            {/* Meet our Sponsoers */}
            <Container
                maxWidth={false}
                sx={{
                    padding: 0,
                    textAlign: "center",
                    width: "100%",
                    height: "100%",
                    marginBottom: isSmallScreen ? '35px' : '69px'
                }}
            >
                <Typography
                    sx={{
                        fontFamily: theme.typography.fontFamily,
                        fontSize: isSmallScreen ? 30 : 69,
                    }}
                >
                    Meet our Sponsors
                </Typography>
                <Grid
                    container
                    direction={isSmallScreen ? "column" : "row"}
                    spacing={isSmallScreen ? 3 : 5}
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        marginTop: 2,
                    }}
                >
                    {sponsors.map((sponsor, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={4}
                            md={2}
                            key={index}
                            sx={{
                                textAlign: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    padding: 2,
                                    border: "1px solid #ddd",
                                    borderRadius: "10px",
                                    transition: "transform 0.3s ease-in-out",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                    },
                                }}
                            >
                                <Box
                                    component="img"
                                    src={sponsor.pic}
                                    alt={sponsor.name}
                                    sx={{
                                        width: "100%",
                                        height: "auto",
                                        borderRadius: "10px",
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontFamily: theme.typography.fontFamily,
                                        fontSize: isSmallScreen ? 14 : 18,
                                        marginTop: 1,
                                    }}
                                >
                                    {sponsor.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontFamily: theme.typography.fontFamily,
                                        fontSize: isSmallScreen ? 12 : 14,
                                        color: "#555",
                                    }}
                                >
                                    {sponsor.reviews}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>


            <Footer isSmallScreen={isSmallScreen} />
        </div>
    );
};
