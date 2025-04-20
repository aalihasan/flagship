import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from '../components/ui/Button';
import { IoMdCart } from 'react-icons/io';
import { BsFillBookmarkStarFill } from 'react-icons/bs';

import Index from '../utlis';



const PhoneDetails = () => {
  const data = useLoaderData()
  const {id}=useParams()
  const singlePhones= data.find(phone => phone.id === parseInt(id))
  
  const { camera_info, storage, description, price, image, model, name, brand } = singlePhones || {}
  
//   const handleFavorite = () => {
//   addFavorite(singlePhones)
  // }
  <Index><Index/>
  const handleFavorite = () => {
    addFa
  }
  return (
    <div className="w-full ">
      <img
        className=" w-full mx-auto md:w-auto mb-8 mt-10 rounded-2xl"
        src={image}
        alt=""
      />
      <div className="flex justify-between">
        <h1 className="text-5xl font-thin mb-8">{name}</h1>
        <div className="space-x-4">
          <Button label={<IoMdCart />}></Button>
          <Button
            
            label={<BsFillBookmarkStarFill />}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
// optional change