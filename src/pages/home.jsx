import React, { useState } from 'react';
import Hero from '../components/Hero';
import PhoneContainer from '../components/phoneContainer';
import { useLoaderData } from 'react-router';


const home = () => {
  const data = useLoaderData()
  const [phones, setPhones]= useState(data)
  const handleSearch = (e, text) => {
    e.preventDefault()
    const searchedPhones = data.filter(
      phone =>
        phone.name?.toLowerCase().split(' ').includes(text.toLowerCase()) ||
        phone.brand?.toLowerCase().split(' ').includes(text.toLowerCase())
    )
    
    setPhones(searchedPhones)
 }
  return (
    <div>
   <Hero handleSearch={handleSearch}></Hero>
    <PhoneContainer phones={phones}></PhoneContainer>
    </div>
  );
};

export default home;