import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils/handleMsg';




const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    Username: '',
    password: ''
  });
  
  const Navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Create a copy of the current loginInfo and update the relevant field
    setLoginInfo((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { Username, password } = loginInfo;
    
    // Basic validation
    if (!Username || !password) {
      return handleError('All Fields are required.');
    }
    try{
      const url="http://localhost:5000/auth/Login";
      const response=await fetch(url,{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(loginInfo)
      });
      const result =await response.json();
      const {success ,message,jwt ,Username,error,userId,admin}=result;
      if(success){
        handleSuccess(message);
        localStorage.setItem('token',jwt);
        localStorage.setItem('Loggedinuser',Username);
        localStorage.setItem('userId', userId);
        if(admin){
          setTimeout(() =>{
            Navigate('/admin')
          },1000)
        }
        else{
          setTimeout(() =>{
            Navigate('/Home')
          },1000)
        }
      }
      else if(error){
        const details=error?.details[0].message;
        handleError(details);
      }
      else if(!success){
        handleError(message);
      }
    }catch(err){
      handleError(err);
    }
  };

  return (
    <div className="flex justify-center py-16 size-full">
      <div className="flex w-[400px] max-w-4xl rounded-lg shadow-md h-3/4 shadow-line mt-10">
        <div className="w-full p-8 bg-white rounded-md">
          <h2 className="text-2xl font-bold text-center mb-6 mt-7">Sign in</h2>
          <form className="mt-7" onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="Username"
                placeholder="USERNAME"
                className="w-full px-4 py-2 rounded-md bg-gray-100 placeholder:text-[10px] placeholder:text-bold hover:bg-gray-200"
                onChange={handleChange} // Use onChange instead of onClick
                value={loginInfo.Username}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                placeholder="PASSWORD"
                className="w-full px-4 py-2 rounded-md bg-gray-100 placeholder:text-[10px] placeholder:text-bold hover:bg-gray-200"
                onChange={handleChange} // Use onChange instead of onClick
                value={loginInfo.password}
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-purple-600" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-line hover:underline hover:text-black duration-300">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-line text-black rounded-md hover:bg-red-400 transition-colors font-semibold"
            >
              SIGN IN
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?
          </p>
          <div className="group relative mt-5 max-w-fit mx-auto">
            <Link to="/Register" className="text-black font-semibold min-h-fit px-2.5 py-1 rounded-md duration-300">
              CREATE
            </Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-line scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center mt-7"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
