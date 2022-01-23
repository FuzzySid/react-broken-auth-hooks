import {useState, useEffect} from 'react';

export default function useLocation(){

    const [locationData,setLocationData]=useState();

    useEffect(()=>{
        getLocationData();
    },[])

    const getLocationData=async()=>{
        const response=await fetch('https://geolocation-db.com/json/');
        const data=await response.json();
        setLocationData(data)
    }

    return {locationData}
}