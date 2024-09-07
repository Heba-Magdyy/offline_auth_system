import axios from 'axios';
import React, { useState } from 'react'


export default function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const SignData = async()=>{
    axios.post("http://localhost:3000/sign-up",
      {name,
      email,
      password
    }
    ).then(()=>console.log("sign up success"))
  }

  return (  
    <>
    <h1 className='text-lg flex justify-center pt-7'>Sign up</h1>

<div className='pt-20'>
  <form className="max-w-sm mx-auto p-4 border-2 border-slate-400 rounded" 
  onSubmit={(e)=>{
    e.preventDefault;
    SignData();
  }}>

  <div className="mb-5">
<label
  htmlFor="name"
  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
>
  Your name
</label>
<input
  type="name"
  id="name"
  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  value={name}
  onChange={(e) => setName(e.target.value)}
  required=""
/>
</div>

<div className="mb-5">
<label
  htmlFor="email"
  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
>
  Your email
</label>
<input
  type="email"
  id="email"
  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  placeholder="name@flowbite.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required=""
/>
</div>
<div className="mb-5">
<label
  htmlFor="password"
  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
>
  Your password
</label>
<input
  type="password"
  id="password"
  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required=""
/>
</div>

<button
type="submit"
className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
>
Submit
</button>
</form>
</div>
</>




  )
}
