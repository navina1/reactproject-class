import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function HotelCard({ hotel }) {
    const navigate=useNavigate();
    return (
        <Card sx={{cursor:"pointer"}} onClick={() => navigate(`/hotel/${hotel.slug}`)}>
            <CardMedia sx={{height:"300px"}} title={hotel.name} component={"img"} image={hotel.thumbnail} alt='hotel-image' />
            <CardContent>
                <Typography fontWeight={"bold"} component="h5">
                    {hotel.address}
                </Typography>
                <Typography fontWeight={"bold"} component="div">
                    ${hotel.pricePerNight} per night
                </Typography>
            </CardContent>
        </Card>
    )
}

export default HotelCard