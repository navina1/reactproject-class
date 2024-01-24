import React from 'react'
import Navbar from '../components/Navbar';
import { Container, Grid, Pagination, Skeleton } from '@mui/material';
import { useState } from 'react';
import { getHotels } from '../api/request';
import { useQuery } from "react-query";
import HotelCard from '../components/HotelCard';

function Home() {
    const [hotels, setHotels] = useState([]);
    const [filteredHotel,setFilteredHotel]=useState([]);
    const [page,setPage]=useState(1);
    const HOTELS_PER_PAGE=5;
    const fetchHotels = async () => {
        const { data } = await getHotels();
        setHotels(data);
        setFilteredHotel(data);
        return data;
    }
    const { isLoading, data, error } = useQuery("hotels", fetchHotels);
    //Pagination
    const startIndex=(page-1) * HOTELS_PER_PAGE;
    const endIndex= page * HOTELS_PER_PAGE - 1;
    const paginatedHotels=filteredHotel.slice(startIndex,endIndex+1);
    const totalHotels=filteredHotel.length;
    const totalPages=Math.ceil(totalHotels/HOTELS_PER_PAGE);

    return (
        <>
            <Navbar hotels={hotels} setFilteredHotels={setFilteredHotel} />
            <Container maxWidth="lg">
                <Grid container spacing={2} marginTop={2}>
                    {isLoading ? (
                        Array.from({ length: HOTELS_PER_PAGE }).map((_, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
                              <Skeleton variant="rectangular" height={200} />
                            </Grid>
                          ))
                    ):(
                        paginatedHotels.length > 0 && (
                            paginatedHotels?.map((hotel, index) =>
                            (<Grid item key={hotel.id} xs={12} sm={6} md={4} lg={4}>
                                <HotelCard hotel={hotel} />
                            </Grid>))
                        )
                    )}
                    
                </Grid>
                <Pagination
                 page={page} 
                 count={totalPages} 
                 onChange={(e,value)=>setPage(value)}
                 sx={{display:"flex",justifyContent:"end"}}
                />
            </Container>
        </>
    )
}

export default Home