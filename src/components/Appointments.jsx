import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import EmbeddedPractitioner from "./EmbeddedPractitioner";

import { displayDetails } from './practitionerData/pracData';
import { useState, useEffect } from "react"

const Appointments = () => {


    const [selected, setSelected] = useState(null)
    const [mobileSelect, setMobileSelect] = useState([])
    const [mobileSelected, setMobileSelected] = useState('')
    const [practitionerList, setPractitionerList] = useState([])

    useEffect(() => {
        const displayDetailsPrep = () => {

            let mobileList = []
            let practitionerObjects = []

            displayDetails.forEach((item) => {

                item.practitioners.forEach((practitioner) => {

                    mobileList.push({ id: practitioner.id, description: `${practitioner.firstname} ${practitioner.lastname} - ${practitioner.role}` })

                    practitionerObjects.push(practitioner)

                })

            })

            setMobileSelect(mobileList)
            setPractitionerList(practitionerObjects)
        }

        displayDetailsPrep()

    }, [])

    //this function is used by both functions below

    const setSelectedPractitioner = (id) => {

        const selectedPractitioner = practitionerList.find((practitioner) => practitioner.id === id

        )
        // console.log(selectedPractitioner)

        setSelected(selectedPractitioner)

    }

    //set the practitioner id in views other than xs
    const getPractitioner = (id) => {

        setSelectedPractitioner(id)

        //find the relevant description in mobileSelect and set mobileSelected

        const practitioner = mobileSelect.find((element) =>
            element.id === id
        );

        setMobileSelected(practitioner.description)

    }


    //set practitioner id in xs view

    const setMobilePractitioner = (e) => {

        setMobileSelected(e.target.value)

        //find the relevant id in mobileSelect 
        const practitioner = mobileSelect.find((element) =>
            element.description === e.target.value
        );

        setSelectedPractitioner(practitioner.id)

    }

    return (
        <Container component="main" maxWidth="lg" sx={{ mt: 4, p: 0 }}>

            <Grid container >
                <Grid item md={4} sm={5} xs={12}>
                    <Box sx={{ display: { xs: "none", sm: "block", md: "block" }, height: "550px", bgcolor: "#d3d3d3", p: 0, borderRadius: 3 }}>

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

                    <Box sx={{ display: { xs: "block", sm: "none", md: "none" }, ml: 1, mr: 1 }}>
                        <FormControl fullWidth>
                            <InputLabel id="input-label-practitioner">Select a practitioner</InputLabel>
                            <Select
                                labelId="input-label-practitioner"
                                id="practitioner-select"
                                value={mobileSelected}
                                label="Select a practitioner"
                                onChange={setMobilePractitioner}
                                name="selected practitioner"
                            >
                                {mobileSelect.map((item) => {
                                    return (
                                        <MenuItem key={item.id} value={item.description}>{item.description}</MenuItem>
                                    )
                                })}

                            </Select>
                        </FormControl>

                    </Box>

                </Grid>
                <Grid item md={8} sm={7} xs={12} >
                    <Box sx={{ height: "1000px", p: 0 }}>
                        {selected ?
                            <EmbeddedPractitioner
                                clinikoId={selected.cliniko_id}
                                source={selected.source}
                                firstname={selected.firstname}
                                lastname={selected.lastname}

                            />
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

