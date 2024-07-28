
// import React, {useEffect, useState} from 'react'

// const Github = () => {
// const [data, setData] = useState ([])
// useEffect(() => {
// fetch('https://api.github.com/users/OS-Samir')
// .thn(response => response.json())
// .then(data => {
//     console.log(data);
//     setData(data);
// })
// }, [])
//   return (
//     <div className='text-center flex justify-center text-3xl bg-gray-300 text-white'>
//       Git hub followers: {data.followers}
//     </div>
//   )
// }

// export default Github

import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    const data = useLoaderData()
//   const [data, setData] = useState({ followers: 0 });

//   useEffect(() => {
//     fetch('https://api.github.com/users/OS-Samir') // Correct API endpoint
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setData(data);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

  return (
    <div className='text-center flex justify-center text-3xl bg-gray-600 text-white'>
      GitHub followers: {data.followers}
      <img className='mr-4 ' src={data.avatar_url} alt = "Git picture" width={300} />
    </div>
  );
};

export default Github;




export const githubInfoLoader = async () => {
    const response =  await fetch('https://api.github.com/users/OS-Samir')
    return response.json();
  }