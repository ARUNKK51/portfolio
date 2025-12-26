import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';
export default function Header()
{ 
   const [toggleMenu,setToggleMenu] = useState(false);
    return (
<header className="flex justify-between px-5 py-2 bg-primary">
<a className="font-bold text-black " href="#">Arun</a>
<nav className="hidden md:block ">

<ul className="flex text-white">
    <li><a href="#Home" className="inline-block px-2 py-1 transition-transform duration-300 ease-out hover:scale-110">Home</a></li>
    <li><a href="#About" className="inline-block px-2 py-1 transition-transform duration-300 ease-out hover:scale-110">About</a></li>
    <li><a href="#Project" className="inline-block px-2 py-1 transition-transform duration-300 ease-out hover:scale-110">Projects</a></li>
    <li><a href="#Resume" className="inline-block px-2 py-1 transition-transform duration-300 ease-out hover:scale-110">Resume</a></li>
    <li><a href="#Contact" className="inline-block px-2 py-1 transition-transform duration-300 ease-out hover:scale-110">Contacts</a></li>
</ul>
</nav>
{toggleMenu && <nav className=" block md:hidden ">

<ul onClick={()=> setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav"> 
    <li><a href="#Home" >Home</a></li>
    <li><a href="#About">About</a></li>
    <li><a href="#Project">Projects</a></li>
    <li><a href="#Resume">Resume</a></li>
    <li><a href="#Contact">Contacts</a></li>
   
</ul>
</nav>}
<button onClick={()=> setToggleMenu(!toggleMenu)} className='block md:hidden' ><Bars3Icon className="text-white h-5" /></button>


</header>

    )
    
    
    
}