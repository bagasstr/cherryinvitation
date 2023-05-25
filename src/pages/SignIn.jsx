// import React from 'react'
// import logo from '../assets/logo.png'
// import { Link } from 'react-router-dom'
// import { AiOutlineGoogle } from 'react-icons/ai'
// import { useMediaQuery } from 'react-responsive'

// /* Desktop Nav */
// const DesktopNav = () => {
//   return (
//     <>
//       <div className='py-[2rem] px-[2rem] pb-[4rem]'>
//         <div className=''>
//           <div className='flex flex-col items-center'>
//             <img src={logo} alt='logo' className='w-[150px]' />
//             <h1 className='text-xl font-bold'>Selamat Datang Di</h1>
//             <h1 className='text-xl font-bold text-secondary'>
//               Cherry Invitation
//             </h1>
//           </div>
//           <div className='mt-[3rem]'>
//             <h1 className='text-xl font-semibold text-center'>Login</h1>
//             <div className='text-center space-y-6 pt-[1rem]'>
//               <div className='flex flex-col items-center'>
//                 <div className='space-y-4 desktop:w-[520px]'>
//                   <input
//                     type='text'
//                     placeholder='Email'
//                     className='outline-none rounded-md border-secondary w-full border-2 px-3 py-[.3rem]'
//                   />
//                   <input
//                     type='password'
//                     placeholder='Password'
//                     className='outline-none rounded-md border-secondary border-2 w-full px-3 py-[.3rem]'
//                   />
//                 </div>
//               </div>
//               <div className='flex flex-col items-center'>
//                 <div className='flex flex-col desktop:w-[520px]'>
//                   <button
//                     type='submit'
//                     className='bg-secondary mb-2 px-3 rounded-full w-full py-[.4rem] text-200'
//                   >
//                     Login
//                   </button>
//                   <button
//                     type='submit'
//                     className='px-[1rem] flex justify-center rounded-full w-full border-2 border-secondary py-[.4rem] text-secondary'
//                   >
//                     <AiOutlineGoogle className='text-2xl mr-[5px]' />
//                     Login With Google
//                   </button>
//                   <div className='mt-3 text-left'>
//                     <Link
//                       to={'/lupa-password'}
//                       className=' text-[13px] mt-[.5rem] text-secondary'
//                     >
//                       Lupa Password
//                     </Link>
//                   </div>
//                 </div>
//                 <hr className='mt-[1rem] desktop:w-[520px]' />
//               </div>
//             </div>
//           </div>
//           <div className='mt-[1rem]'>
//             <h1 className='text-center text-[13px] text-'>
//               Don't have an account yet?{' '}
//               <span className='ml-2'>
//                 <Link to={'/sign-up'} className='font-medium text-100'>
//                   Register
//                 </Link>
//               </span>
//             </h1>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// /* Mobile Nav */
// const MobileNav = () => {
//   return (
//     <>
//       <div className='py-[2rem] px-[2rem] pb-[4rem]'>
//         <div className=''>
//           <div className='flex flex-col items-center'>
//             <img src={logo} alt='logo' className='w-[150px]' />
//             <h1 className='text-xl font-bold'>Selamat Datang Di</h1>
//             <h1 className='text-xl font-bold text-secondary'>
//               Cherry Invitation
//             </h1>
//           </div>
//           <div className='mt-[3rem]'>
//             <h1 className='text-xl font-semibold text-center'>Login</h1>
//             <div className='text-center space-y-6 pt-[1rem]'>
//               <div className='flex justify-center'>
//                 <div className='space-y-4 tablet:w-[320px]'>
//                   <input
//                     type='text'
//                     placeholder='Email'
//                     className='outline-none rounded-md border-secondary border-2 px-3 w-full py-[.3rem]'
//                   />
//                   <input
//                     type='password'
//                     placeholder='Password'
//                     className='outline-none rounded-md border-secondary border-2 w-full px-3 py-[.3rem]'
//                   />
//                 </div>
//               </div>
//               <div className='flex flex-col items-center'>
//                 <div className='flex flex-col tablet:w-[320px]'>
//                   <button
//                     type='submit'
//                     className='bg-secondary mb-2 px-3 rounded-full w-full py-[.4rem] text-200'
//                   >
//                     Login
//                   </button>
//                   <button
//                     type='submit'
//                     className='px-[1rem] flex justify-center rounded-full w-full border-2 border-secondary py-[.4rem] text-secondary'
//                   >
//                     <AiOutlineGoogle className='text-2xl mr-[5px]' />
//                     Login With Google
//                   </button>
//                   <div className='mt-3 text-left'>
//                     <Link
//                       to={'/lupa-password'}
//                       className=' text-[13px] mt-[.5rem] text-secondary'
//                     >
//                       Lupa Password
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <hr className='mt-[1rem]' />
//           <div className='mt-[1rem]'>
//             <h1 className='text-center text-[13px] text-'>
//               Don't have an account yet?{' '}
//               <span className='ml-2'>
//                 <Link to={'/sign-up'} className='font-medium text-100'>
//                   Register
//                 </Link>
//               </span>
//             </h1>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default function SignIn() {
//   const Mobile = ({ children }) => {
//     const isMobile = useMediaQuery({
//       minWidth: 320,
//       maxWidth: 1023,
//     })
//     return isMobile ? children : null
//   }

//   /* const Tablet = ({ children }) => {
// 	  const isTablet = useMediaQuery({
// 		 minWidth: 768,
// 	  })
// 	  return isTablet ? children : null
// 	} */
//   const Desktop = ({ children }) => {
//     const isDesktop = useMediaQuery({
//       minWidth: 1024,
//     })
//     return isDesktop ? children : null
//   }

//   return (
//     <div>
//       <Desktop>
//         <DesktopNav />
//       </Desktop>
//       <Mobile>
//         <MobileNav />
//       </Mobile>
//     </div>
//   )
// }
