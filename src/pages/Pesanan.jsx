import React from 'react'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { paket } from '../data'
import { desain } from '../data'
import Payment from '../components/Payment'
import { BiXCircle } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

const Pesanan = () => {
  const [selected, setSelected] = useState(paket[1])
  const [selecteds, setSelecteds] = useState(desain[0])

  const handleOrder = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className='container my-32'>
        <div className='pb-10 flex justify-end max-w-4xl'>
          <NavLink to='/'>
            <BiXCircle className='text-4xl cursor-pointer' />
          </NavLink>
        </div>
        <div className='flex justify-center flex-col items-center'>
          <h1 className='font-bold text-3xl mb-2'>Pesan Undangan Sekarang</h1>
          <p className='text-xl w-96 text-center font-light'>
            Silahkan pilih paket dan desain yang kamu inginkan
          </p>
          <div className='absoulute mt-8 w-[25rem] z-10'>
            <Listbox value={selected} onChange={setSelected}>
              <div className='relative mt-1'>
                <Listbox.Button className='relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
                  <span className='block truncate'>{selected.name}</span>
                  <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                    <ChevronUpDownIcon
                      className='h-5 w-5 text-gray-400'
                      aria-hidden='true'
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave='transition ease-in duration-100'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                    {paket.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? 'bg-amber-100 text-amber-900'
                              : 'text-gray-900'
                          }`
                        }
                        disabled={person.unavailable}
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {person.name}
                            </span>
                            {selected ? (
                              <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                                <CheckIcon
                                  className='h-5 w-5'
                                  aria-hidden='true'
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
          <div className='absoulute top-72 mt-5 w-[25rem]'>
            <Listbox value={selecteds} onChange={setSelecteds}>
              <div className='relative mt-1'>
                <Listbox.Button className='relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
                  <span className='block truncate'>{selecteds.name}</span>
                  <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                    <ChevronUpDownIcon
                      className='h-5 w-5 text-gray-400'
                      aria-hidden='true'
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave='transition ease-in duration-100'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                    {desain.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? 'bg-amber-100 text-amber-900'
                              : 'text-gray-900'
                          }`
                        }
                        value={person}
                      >
                        {({ selecteds }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selecteds ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {person.name}
                            </span>
                            {selecteds ? (
                              <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                                <CheckIcon
                                  className='h-5 w-5'
                                  aria-hidden='true'
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
          <div className='mt-12 w-[25rem]'>
            <button
              onClick={handleOrder}
              className='bg-200 px-4 py-2 rounded-md text-100 w-full'
            >
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>
      <Payment />
    </>
  )
}

export default Pesanan
