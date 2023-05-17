import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { AiOutlineGoogle } from 'react-icons/ai'

const SignIn = () => {
  return (
    <>
      <div className='py-[1rem] px-[1rem]'>
        <div className=''>
          <div className='flex flex-col items-center'>
            <img src={logo} alt='logo' className='w-[150px]' />
            <h1 className='font-bold text-xl'>Selamat Datang Di</h1>
            <h1 className='font-bold text-xl text-secondary'>
              Cherry Invitation
            </h1>
          </div>
          <div className='mt-[3rem]'>
            <h1 className='text-xl font-semibold text-center'>Login</h1>
            <div className='text-center space-y-6 pt-[1rem]'>
              <div className='space-y-4 w-auto'>
                <input
                  type='text'
                  placeholder='Email'
                  className='outline-none rounded-md border-secondary border-2 px-3 w-full h-[2rem]'
                />
                <input
                  type='password'
                  placeholder='Password'
                  className='outline-none rounded-md border-secondary border-2 w-full px-3 h-[2rem]'
                />
              </div>
              <div className='flex flex-col w-auto'>
                <button
                  type='submit'
                  className='bg-secondary mb-2 px-3 rounded-full w-full py-[.4rem] text-200'
                >
                  Login
                </button>
                <button
                  type='submit'
                  className='px-[1rem] flex justify-center rounded-full w-full border-2 border-secondary py-[.4rem] text-secondary'
                >
                  <AiOutlineGoogle className='text-2xl' />
                  Login With Google
                </button>
                <Link
                  to={'/lupa-password'}
                  className=' text-[13px] mt-[.5rem] text-secondary'
                >
                  Lupa Password
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
