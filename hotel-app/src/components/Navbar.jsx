import React from 'react'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from '@mui/material';
import {IconButton,Avatar,Box , TextField} from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Navbar({ hotels, setFilteredHotels, isSearch = true }) {
    const [searchValue,setSearchValue]=useState();
    const navigate=useNavigate();
    const handleSearch = () => {
        const filteredHotels = hotels.filter(
          (hotel) =>
            hotel.address.toLowerCase().includes(searchValue.toLowerCase()) ||
            hotel.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        // console.log(filteredHotels);
        setFilteredHotels(filteredHotels);
      };
    return (

        <AppBar position="static" color='inherit'>
            <Container maxWidth="lg">
                <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
                    <Typography 
                        variant="h6" 
                        component="div" 
                        fontWeight={"bold"} 
                        sx={{ cursor:"pointer"}}
                        onClick={()=>navigate("/")}
                    >
                        BookStay
                    </Typography>
                    <Box sx={{display:"flex", alignItems:"center" , gap:3}}>
                    {isSearch && (<TextField 
                        variant='outlined' 
                        label="search" 
                        size='small' 
                        value={searchValue} 
                        onChange={(e)=>setSearchValue(e.target.value)} 
                        InputProps={{
                            endAdornment: (
                              <IconButton position="start" onClick={handleSearch}>
                                <SearchIcon />
                              </IconButton>
                            ),
                        }}
                    />)}
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