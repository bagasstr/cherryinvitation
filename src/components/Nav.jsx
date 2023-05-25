import React from 'react'

// Import React-Scroll
import * as Scroll from 'react-scroll'
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll'

// import data
import { nav } from '../data'

const Nav = () => {
  let Link = Scroll.Link
  var scroll = Scroll.animateScroll
  var scrollSpy = Scroll.scrollSpy
  return (
    <nav>
      <ul className='flex gap-x-10'>
        {nav.map((item, index) => {
          // destructure item
          const { href, name } = item
          return (
            <li key={index}>
              <Link
                className='transition hover:text-secondary hover:cursor-pointer'
                spy={true}
                smooth={true}
                duration={300}
                to={href}
              >
                {name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
