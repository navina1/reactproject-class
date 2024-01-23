import React from 'react'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from '@mui/material';
import {IconButton,Avatar,Box} from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
function Navbar() {
    return (

        <AppBar position="static" color='inherit'>
            <Container maxWidth="lg">
                <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
                    <Typography variant="h6" component="div" fontWeight={"bold"} sx={{ cursor:"pointer"}}>
                        BookStay
                    </Typography>
                    <Box sx={{display:"flex", alignItems:"center" , gap:3}}>
                    <Typography variant="h6" component="div" fontWeight={"bold"} sx={{ cursor:"pointer"}}>
                        Home
                    </Typography>
                    <IconButton>
                        <Avatar src="https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE="/>
                    </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    )
}

export default Navbar