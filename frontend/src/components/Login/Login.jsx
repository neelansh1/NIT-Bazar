import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import styles from '../../styles/styles'
import {Link} from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false); // Initialize as boolean

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          Login To your Account
        </h2>
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='w-50% sm:w-full bg-white py-8 px-4 shadow sm-rounded-lg sm:px-10 relative'>
          <form className='space-y-6'>


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


            {/* remember-me */}
            <div className={`${styles.noramlFlex} justify-between`}>
              <div className={`${styles.noramlFlex}`}>
                <input type='checkbox' name='remember-me' id='remember-me'
                 className='h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded'/>
                 <label htmlFor='remember-me' className='ml-2 block text-sm'>
                  Remember me
                 </label>
              </div>
              <div className='text-sm'>
                <a href='.forgot-password' className='font-medium text-green-600 hover:text-green-400'>
                  Forgot your Password
                </a>
              </div>
            </div>


            {/* submit btn */}
            <div>
              <button type='submit' 
              className='group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-400'>
              Submit
              </button>
            </div>

            
            {/* not have account signup */}
            <div className={`${styles.noramlFlex} w-full`}>
              <h4> Not have any account?</h4>
              <Link to='/signup' className='text-blue-600 pl-2'>
                Signup
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
