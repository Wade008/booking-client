
import Typography from '@mui/material/Typography';


const EmbeddedPractitioner = (props) => {

    const { clinikoId, source, firstname, lastname } = props


    return (
        <>
            <Typography component="h1" variant="h6" sx={{ mt: 2, height: "70px", textAlign: "center" }}>Book an appointment with {firstname} {lastname}</Typography>

            <iframe id={clinikoId} title={firstname} src={source} style={{ pointerEvents: 'auto', border: '0px', width: '100%', height: '100%', overFlowY: 'scroll', margin: '0px', padding: '0px' }}></iframe>
        </>


    )



}

export default EmbeddedPractitioner;