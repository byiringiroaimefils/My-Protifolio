import React from 'react';
import data from "./dt";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa"

export default function Home() {
  const Users = data.map(item => {
    return (
      <div className='flex justify-between h-50vh mt-36' key={item.id}>
        <div className='ml-12 translate-y-28'>
          <FaFacebook />
          <FaLinkedinIn />
          <FaTwitter />
        </div>
        <div className=' '>
          <img src={item.Image} alt={item.alt} className='w-96' />
        </div>
        <div className='mr-32 translate-y-20 text-center'>
          <h2>{item.Greeting}</h2>
          <h5>{item.Name}</h5>
          <div className="line w-72 h-1 bg-sky-800 rounded"></div>
          <p dangerouslySetInnerHTML={{ __html: item.Description }} />

        </div>
      </div>
    );
  });

  return (
    <div>
      {Users}
    </div>
  );

}





