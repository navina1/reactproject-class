import Navbar from "../components/Navbar";
import React from "react";
import { getHotelBySlug } from "../api/request";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

function HotelInfo() {
  const { slug } = useParams();
  const fetchHotelData = async () => {
    const { data } = await getHotelBySlug(slug);
    return data;
  };

  const { isLoading, data } = useQuery("hotels-data", fetchHotelData);
  console.log("hotel Data", data);

  return (
    <div>
      <Navbar isSearch={false} />
      <h1>Hotel Info - {slug}</h1>
    </div>
  );
}

export default HotelInfo;