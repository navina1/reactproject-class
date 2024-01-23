import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
function HotelCard({ hotel }) {
    return (
        <Card sx={{cursor:"pointer"}}>
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