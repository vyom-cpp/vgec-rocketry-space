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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Form } from "react-router-dom";
// import { useInView } from "react-intersection-observer";

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

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        console.log({ amount, name, email });
        handleClose();
    };

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div style={{ overflow: "hidden" }}>

            <Container maxWidth={false}
                sx={{
                    backgroundColor: "black",
                    height: "500px",
                    width: "100%",
                    backgroundSize: "cover",
                    objectFit: "cover"
                }}
            >
                <Navbar />

                <Typography
                    sx={{
                        color: "white",
                        fontFamily: theme.typography.fontFamily,
                        fontSize: isSmallScreen ? "70px" : "90px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        marginTop: "70px"
                    }}
                >
                    Invest in the future.
                </Typography>

                <Typography
                    sx={{
                        color: "white",
                        fontFamily: theme.typography.fontFamily,
                        fontSize: isSmallScreen ? "45px" : "60px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                    }}
                >
                    Contribute today to empower the next generation.
                </Typography>
            </Container>

            {/* Quote */}
            {/* <Container
                maxWidth={false}
                sx={{
                    backgroundColor: "white",
                    width: "100%",
                    height: "200px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    marginBottom: "0px",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    border: "none"
                }}
            >
                <Typography
                    sx={{
                        color: "black",
                        fontFamily: theme.typography.fontFamily,
                        fontSize: isSmallScreen ? "30px" : "50px"
                    }}
                >
                    “Rockets are cool. There's no getting around them”
                    <br />
                    ~Elon Musk
                </Typography>
            </Container> */}

            {/* Sponsor */}
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

                                console.log("Form Submitted", formJson);
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
                                <Typography variant="h6" gutterBottom 
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
                                        name="customAmount"
                                        variant="outlined"
                                        margin="normal"
                                        label="Enter Amount"
                                        type="number"
                                        InputProps={{
                                            inputProps: { min: 1 }
                                        }}
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
                                Payment gateway will be added soon, use this QR Code for now
                            </Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => setQrDialogOpen(false)} color="primary">
                                Close
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
                    spacing={isSmallScreen ? 2 : 20}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box sx={{ textAlign: "center" }}>
                        <img
                            src={Rocket}
                            alt="Ananta"
                            style={{ width: isSmallScreen ? "95%" : "350px", height: "auto" }}
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

                    <Box sx={{ textAlign: "center" }}>
                        <img
                            src={Rocket}
                            alt="Aflatoon"
                            style={{ width: isSmallScreen ? "95%" : "350px", height: "auto" }}
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



            {/* Why you should contribute us */}


            <Footer isSmallScreen={isSmallScreen} />
        </div>
    );
};
