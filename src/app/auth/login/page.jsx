'use client'
import Footercomp from '@/app/components/footer';
import Navbar from '@/app/components/navbar';
import { useState } from 'react';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {}
    
  
  const handleForgetPassword = async () => {}
  

  
  return (
    <div>
          <div className="sticky top-0 flex w-full h-fit items-center">

<Navbar />
</div>
     <div className="flex  border-2 border-solid bg-white min-h-screen items-center justify-center">
     <div className="bg-white p-8 rounded-lg shadow-lg border-2 w-96 ml-20]">
     <div className="mt-4 text-gray-600 font-sans font-semibold">
     Welcome back,<p className="text-sm font-normal">Sign in to your account to continue</p>
    </div>
  
  <form onSubmit={handleLogin}>
    <div className=" my-5">
      <label htmlFor="email" className="block text-[#2D6C56]">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-[#2D6C56] px-3 py-2 w-full rounded-md focus:outline-none focus:border-[#2D6C56]"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="block text-gray-600">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-[#2D6C56] px-3 py-2 w-full rounded-md focus:outline-none focus:border-[#2D6C56]"
      />
    </div>
    <div className="mb-4">
      <div className="flex justify-between items-center">
        <div>
        <input
            type="checkbox"
            id="remember"
            className="text-[#2D6C56] form-checkbox"
          />
          <label htmlFor="remember" className="inline-block ml-2 text-gray-600">
            Remember Me
          </label>
          
        </div>
        <a onClick={handleForgetPassword} className="text-[#2D6C56] hover:underline">Forget Password?</a>
      </div>
    </div>
    <div type="submit" className=" hover:border-[#2D6C56] border-emerald-100 border-x-2 border-b-4 text-[#2D6C56]font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 w-40" onClick={handleLogin} >Login</div>
      <p className="text-sm font-normal my-2">Do not have an account yet? <a className="text-[#2D6C56] hover:underline" href="signup">Sign up here</a></p>
    
  </form>
</div>


</div>
<Footercomp />
   </div>
  );
};

export default Login;
