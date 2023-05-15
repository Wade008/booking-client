import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import EmbeddedPract1 from './EmbeddedPrac1';
import EmbeddedPract2 from './EmbeddedPrac2';
import EmbeddedPract3 from './EmbeddedPrac3';
import { pracDetails, displayDetails } from './practitionerData/pracData';
import { useState } from "react"

const Appointments = () => {

    const practitioners = pracDetails;
    const [selected, setSelected] = useState(null)

    const displayDetailsMobile = () => {

        let mobileList = []

        displayDetails.forEach((item) => {

            item.practitioners.forEach((practitioner) => {

                mobileList.push(`${practitioner.firstname} ${practitioner.lastname} - ${practitioner.role}`)
            })

        })

        return mobileList
    }

    // console.log(displayDetailsMobile())



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

                        {displayDetails.map((heading) => {
                            return (
                                <div key={heading.id}>
                                    <Typography variant="h6" sx={{ p: 1, textAlign: "left" }}>
                                        {heading.title}
                                    </Typography>
                                    {heading.practitioners.map((practitioner) => {
                                        return (
                                            <Box key={practitioner.id} onClick={() => { getPractitioner(practitioner.id) }} sx={{ pl: 2, mt: 2, display: "flex", justifyContent: "left", alignItems: "center", height: "40px", width: "90%", cursor: "pointer" }}>
                                                <span>{practitioner.avatar}</span>
                                                <Box>
                                                    <Typography sx={{ display: "block", pl: 2, fontWeight: "bold" }}> {practitioner.firstname} {practitioner.lastname}</Typography>
                                                    <Typography sx={{ display: "block", pl: 2 }}> {practitioner.role}</Typography>
                                                </Box>

                                            </Box>
                                        )
                                    })

                                    }

                                </div>

                            )
                        })}



                    </Box>


                </Grid>
                <Grid item md={8} sm={7} xs={12} >
                    <Box sx={{ height: "1000px", p: 0 }}>
                        {selected === "1a" ?
                            <>
                                <Typography component="h1" variant="h6" sx={{ mt: 2, height: "70px", textAlign: "center" }}>Book an appointment with {practitioners[0].firstname}  {practitioners[0].lastname}</Typography>
                                <EmbeddedPract1 />
                            </>
                            : selected === "1b" ?
                                <>
                                    <Typography component="h1" variant="h6" sx={{ mt: 2, height: "70px", textAlign: "center" }}>Book an appointment with {practitioners[1].firstname}  {practitioners[1].lastname}</Typography>
                                    <EmbeddedPract2 />
                                </> :
                                selected === "2a" ?
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

