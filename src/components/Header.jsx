import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import mainLogo from "../img/Physio-Logo-1-2.png"
import { Image } from "./styled/CustomStyles"

const Header = () => {


    return (

        <AppBar position="static" sx={{ backgroundColor: "inherit" }}>
            <Box sx={{ width: 220, m: 2 }}>
                <Image src={mainLogo} alt="business logo" />
            </Box>
        </AppBar>
    )
}

export default Header;