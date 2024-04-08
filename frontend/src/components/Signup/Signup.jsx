import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import styles from '../../styles/styles'
import axios from "axios";
import {Link} from "react-router-dom";
import {server} from "../../server"

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false); // Initialize as boolean
  const [Name, setName] = useState('');

  
  const handleSubmit = async (e) => {

    const config={headers: {"Content-Type":"multipart/form-data"}};
    const newForm=new FormData();

    newForm.append("name", Name);
    newForm.append("email", email);
    newForm.append("password", password);
    
    axios.post(`${server}/user/create-user`, { Name, email, password })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error)
      });
  };


  return (
    <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          Register as a New User
        </h2>
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='w-50% sm:w-full bg-white py-8 px-4 shadow sm-rounded-lg sm:px-10 relative'>
          <form className='space-y-6' onSubmit={handleSubmit}>


            {/* Full Name*/}
            <div>
              <label htmlFor='text' className='block text-sm font-medium text-green-700'>
                Full Name
              </label>
              <div className='mt-1'>
                <input
                  type='text'
                  name='text'
                  autoComplete='Name'
                  required
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  className='w-full px-3 py-2 border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none'
                />
              </div>
            </div>


             {/* email */}
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-green-700'>
                Email Address
              </label>
              <div className='mt-1'>
                <input
                  type='email'
                  name='email'
                  autoComplete='email'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-full px-3 py-2 border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none'
                />
              </div>
            </div>


            {/* password */}
            <div className='relative'>
              <label htmlFor='password' className='block text-sm font-medium text-green-700'>
                Password
              </label>
              <div className='mt-1 relative'>
                <input
                  type={visible ? 'text' : 'password'} // Toggle between text and password
                  name='password'
                  autoComplete='current-password'
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='w-full px-3 py-2 border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none pr-10' // Added padding for icon
                />
                {visible ? (
                  <AiOutlineEyeInvisible className='absolute right-2 top-2 cursor-pointer' size={25} onClick={() => setVisible(false)} />
                ) : (
                  <AiOutlineEye className='absolute right-2 top-2 cursor-pointer' size={25} onClick={() => setVisible(true)} />
                )}
              </div>
            </div>





            {/* submit btn */}
            <div>
              <button type='submit' 
              className='group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-400'>
              Submit
              </button>
            </div>

            
            {/* Already have account signup */}
            <div className={`${styles.noramlFlex} w-full`}>
              <h4> Already have any account?</h4>
              <Link to='/login' className='text-blue-600 pl-2'>
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
