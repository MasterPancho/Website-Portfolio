import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';        //Allows to navigate to different pages
import { styles } from '../styles';             
import { navLinks } from '../constants';        
import { logo, menu, close } from '../assets';  

//This component creates the top bar of the website, with the logo and the navigation links. 
const Navbar = () => {
  const [active, setActive] = useState("");      //Keeps track of where we are on the page
  const [toggle, setToggle] = useState(false);   //Keeps track of the menu state
  return (
    <nav
      /* Navbar container with padding defined in styles, full width, flexbox, fixed center position
      at the top, (z-20) for making it appear above other elemetns. & background color */
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}       
    >
      <div className= "w-full flex justify-between items-center max-w-7xl mx-auto">                     {/*Max width of 7xl, center aligned*/}
        <Link
          to ="/"                                                                                       //Link to the top of the page
          className="flex items-center gap-2"                                                           //Flexbox with gap between items
          onClick={() => {                        
            setActive("");
            window.scrollTo(0, 0);                                                                      //Scroll to the top of the page
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain"/>                              {/*Logo image*/}
          <p className= "text-white text-[18px] font-bold cursor-pointer flex">                        {/*Text with white color, 18px font size, bold*/}
            Miguel Varela &nbsp;<span className="sm:block hidden">| Software Engineer Student</span>
          </p>
        </Link>
        
        <ul className="list-none hidden sm:flex flex-row gap-12">
          {navLinks.map((link) => (                                                                     //For each link in the array, it generates a list item, which creates a link for the given id
            <li
            key ={link.id}
            className={`${active === link.title? "text-white":"text-secondary"}
                        hover:text-white text-[18px] font-medium cursor-pointer`}                     //Depending which navLink is active, it will show as white. If hovered over, it shows as white also.
            onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>                                            
            </li>
          ))}
        </ul>

        {/*For small screens, it will show the menu button*/}
        <div className="sm:hidden flex flex-1 justify-end items-center"> 
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
            />

            {/*Creates the black gradient and it shows the link IDs in a column*/}
            <div className={`${!toggle ? 'hidden': 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                
                {/*When the ID is clicked, it closes automatically*/}
                {navLinks.map((link) => (                                                                     
                  <li
                    key ={link.id}
                    className={`${active === link.title? "text-white":"text-secondary"}
                                font-poppins font-medium cursor-pointer text-[16px]`}                     
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                      <a href={`#${link.id}`}>{link.title}</a>                                            
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </div>
    </nav> 
  )
}

export default Navbar