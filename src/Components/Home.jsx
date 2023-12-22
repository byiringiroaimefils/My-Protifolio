import React from 'react';
import data from "./dt";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa"

export default function Home() {
  const Users = data.map(item => {
    return (
      <div className='flex justify-centeri
      r64 gap-5 h-50vh align-bottom' key={item.id}>
        <div>
          <FaFacebook />
          <FaLinkedinIn />
          <FaTwitter />
        </div>
        <div>
          <img src={item.Image} alt={item.alt} className='w-96' />
        </div>
        <div>
          <h2 >{item.Name}</h2>
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





