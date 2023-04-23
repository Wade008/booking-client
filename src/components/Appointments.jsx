import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import EmbeddedPract1 from './EmbeddedPrac1';
import EmbeddedPract2 from './EmbeddedPrac2';
import EmbeddedPract3 from './EmbeddedPrac3';
import { pracDetails } from './practitionerData/pracData';
import { useState } from "react"

const Appointments = () => {

    const practitioners = pracDetails;

    const [selected, setSelected] = useState(null)

    const getPractitioner = (id) => {
        setSelected(id)
    }

    // console.log(practitioners)


    return (
        <Container component="main" maxWidth="lg" sx={{ mt: 4, p: 0 }}>

            <Grid container >
                <Grid item md={4} sm={5} xs={12} >
                    <Box sx={{ display: { xs: "block", sm: "block", md: "block" }, height: "550px", bgcolor: "#d3d3d3", p: 0, borderRadius: 3 }}>

                        <Typography variant="h5" sx={{ p: 2, textAlign: "center" }}>
                            Make a booking
                        </Typography>
                        <Typography variant="h6" sx={{ p: 1, textAlign: "left" }}>
                            Our Phyiotherapists:
                        </Typography>

                        <Box onClick={() => { getPractitioner(practitioners[0].id) }} sx={{ pl: 2, mt: 1, display: "flex", justifyContent: "left", alignItems: "center", height: "40px", width: "90%", cursor: "pointer" }}>
                            <span>{practitioners[0].avatar}</span>
                            <Box>
                                <Typography sx={{ display: "block", pl: 2, fontWeight: "bold" }}> {practitioners[0].firstname} {practitioners[0].lastname}</Typography>
                                <Typography sx={{ display: "block", pl: 2 }}> {practitioners[0].role}</Typography>
                            </Box>

                        </Box>
                        <Box onClick={() => { getPractitioner(practitioners[1].id) }} sx={{ pl: 2, mt: 3, display: "flex", justifyContent: "left", alignItems: "center", height: "40px", width: "90%", cursor: "pointer" }}>
                            <span>{practitioners[1].avatar}</span>
                            <Box>
                                <Typography sx={{ display: "block", pl: 2, fontWeight: "bold" }}> {practitioners[1].firstname} {practitioners[1].lastname}</Typography>
                                <Typography sx={{ display: "block", pl: 2 }}> {practitioners[1].role}</Typography>
                            </Box>

                        </Box>

                        <Typography variant="h6" sx={{ p: 1, textAlign: "left" }}>
                            Our Massage therapist:
                        </Typography>
                        <Box onClick={() => { getPractitioner(practitioners[2].id) }} sx={{ pl: 2, mt: 1, display: "flex", justifyContent: "left", alignItems: "center", height: "40px", width: "90%", cursor: "pointer" }}>
                            <span>{practitioners[2].avatar}</span>
                            <Box>
                                <Typography component="p" sx={{ display: "block", pl: 2, fontWeight: "bold" }}> {practitioners[2].firstname} {practitioners[2].lastname}</Typography>
                                <Typography component="p" sx={{ display: "block", pl: 2 }}> {practitioners[2].role}</Typography>
                            </Box>

                        </Box>


                    </Box>


                </Grid>
                <Grid item md={8} sm={7} xs={12} >
                    <Box sx={{ height: "1000px", p: 0 }}>
                        {selected === 1 ?
                            <>
                                <Typography component="h1" variant="h6" sx={{ mt: 2, height: "70px", textAlign: "center" }}>Book an appointment with {practitioners[0].firstname}  {practitioners[0].lastname}</Typography>
                                <EmbeddedPract1 />
                            </>
                            : selected === 2 ?
                                <>
                                    <Typography component="h1" variant="h6" sx={{ mt: 2, height: "70px", textAlign: "center" }}>Book an appointment with {practitioners[1].firstname}  {practitioners[1].lastname}</Typography>
                                    <EmbeddedPract2 />
                                </> :
                                selected === 3 ?
                                    <>
                                        <Typography component="h1" variant="h6" sx={{ mt: 2, height: "70px", textAlign: "center" }}>Book an appointment with {practitioners[2].firstname}  {practitioners[2].lastname}</Typography>
                                        <EmbeddedPract3 />
                                    </>

                                    :
                                    <Typography component="h1" variant="h6" sx={{ mt: 2, height: "50px", textAlign: "center" }}>Select a practitioner to make a booking</Typography>

                        }
                    </Box>

                </Grid>

            </Grid>

        </Container>

    )


}

export default Appointments;

